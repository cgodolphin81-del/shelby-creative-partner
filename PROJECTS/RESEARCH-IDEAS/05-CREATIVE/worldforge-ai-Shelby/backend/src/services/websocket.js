import logger from '../utils/logger.js';

class WebSocketService {
  constructor() {
    this.io = null;
    this.worldRooms = new Map(); // worldId -> Set of socket ids
    this.playerSessions = new Map(); // socketId -> player data
    this.chatHistory = new Map(); // worldId -> messages[]
  }
  
  setup(io) {
    this.io = io;
    
    io.on('connection', (socket) => {
      logger.info('Client connected', { socketId: socket.id });
      
      this.handleConnection(socket);
    });
    
    logger.info('WebSocket service initialized');
  }
  
  handleConnection(socket) {
    // Authentication
    socket.on('authenticate', (data) => {
      this.handleAuthentication(socket, data);
    });
    
    // Join world
    socket.on('join-world', (data) => {
      this.handleJoinWorld(socket, data);
    });
    
    // Leave world
    socket.on('leave-world', (data) => {
      this.handleLeaveWorld(socket, data);
    });
    
    // Player movement
    socket.on('player-move', (data) => {
      this.handlePlayerMove(socket, data);
    });
    
    // Player action
    socket.on('player-action', (data) => {
      this.handlePlayerAction(socket, data);
    });
    
    // Chat messages
    socket.on('chat-message', (data) => {
      this.handleChatMessage(socket, data);
    });
    
    // Trading
    socket.on('trade-request', (data) => {
      this.handleTradeRequest(socket, data);
    });
    
    socket.on('trade-accept', (data) => {
      this.handleTradeAccept(socket, data);
    });
    
    socket.on('trade-decline', (data) => {
      this.handleTradeDecline(socket, data);
    });
    
    // Voice chat (WebRTC signaling)
    socket.on('webrtc-offer', (data) => {
      this.handleWebRTCOffer(socket, data);
    });
    
    socket.on('webrtc-answer', (data) => {
      this.handleWebRTCAnswer(socket, data);
    });
    
    socket.on('webrtc-ice-candidate', (data) => {
      this.handleWebRTCIceCandidate(socket, data);
    });
    
    // Disconnect
    socket.on('disconnect', () => {
      this.handleDisconnect(socket);
    });
  }
  
  handleAuthentication(socket, { userId, token, worldId }) {
    // Verify token (implementation depends on auth system)
    // For now, just store the user data
    this.playerSessions.set(socket.id, {
      userId,
      worldId,
      authenticated: true,
      connectedAt: new Date()
    });
    
    socket.emit('authenticated', { success: true });
    logger.info('Player authenticated', { userId, worldId });
  }
  
  handleJoinWorld(socket, { worldId, playerData }) {
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.authenticated) {
      socket.emit('error', { message: 'Not authenticated' });
      return;
    }
    
    // Join the world room
    socket.join(worldId);
    
    // Add to world room tracking
    if (!this.worldRooms.has(worldId)) {
      this.worldRooms.set(worldId, new Set());
    }
    this.worldRooms.get(worldId).add(socket.id);
    
    // Update session
    session.worldId = worldId;
    session.playerData = playerData;
    
    // Notify others in the world
    socket.to(worldId).emit('player-joined', {
      playerId: socket.id,
      playerData
    });
    
    // Send current players to the joining player
    const playersInWorld = this.getPlayersInWorld(worldId);
    socket.emit('world-players', { players: playersInWorld });
    
    // Send chat history
    const history = this.chatHistory.get(worldId) || [];
    socket.emit('chat-history', { messages: history.slice(-50) });
    
    logger.info('Player joined world', { 
      socketId: socket.id, 
      worldId, 
      playerName: playerData?.name 
    });
  }
  
  handleLeaveWorld(socket, { worldId }) {
    socket.leave(worldId);
    
    const room = this.worldRooms.get(worldId);
    if (room) {
      room.delete(socket.id);
      if (room.size === 0) {
        this.worldRooms.delete(worldId);
      }
    }
    
    socket.to(worldId).emit('player-left', {
      playerId: socket.id
    });
    
    logger.info('Player left world', { socketId: socket.id, worldId });
  }
  
  handlePlayerMove(socket, { position, rotation, velocity }) {
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    // Broadcast movement to other players in the same world
    socket.to(session.worldId).emit('player-moved', {
      playerId: socket.id,
      position,
      rotation,
      velocity,
      timestamp: Date.now()
    });
  }
  
  handlePlayerAction(socket, { action, targetId, data }) {
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    // Broadcast action to other players
    socket.to(session.worldId).emit('player-action', {
      playerId: socket.id,
      action,
      targetId,
      data,
      timestamp: Date.now()
    });
    
    // Handle specific actions
    switch (action) {
      case 'interact':
        this.handleInteraction(socket, targetId, data);
        break;
      case 'use-item':
        this.handleItemUse(socket, targetId, data);
        break;
      case 'emote':
        this.handleEmote(socket, data);
        break;
    }
  }
  
  handleChatMessage(socket, { message, type = 'text' }) {
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    const chatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      playerId: socket.id,
      playerName: session.playerData?.name || 'Anonymous',
      message,
      type,
      timestamp: new Date().toISOString()
    };
    
    // Store in history
    if (!this.chatHistory.has(session.worldId)) {
      this.chatHistory.set(session.worldId, []);
    }
    const history = this.chatHistory.get(session.worldId);
    history.push(chatMessage);
    
    // Keep history manageable (last 100 messages)
    if (history.length > 100) {
      history.shift();
    }
    
    // Broadcast to all players in the world
    this.io.to(session.worldId).emit('chat-message', chatMessage);
  }
  
  handleTradeRequest(socket, { targetPlayerId, items }) {
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    // Send trade request to target player
    this.io.to(targetPlayerId).emit('trade-request', {
      fromPlayerId: socket.id,
      fromPlayerName: session.playerData?.name,
      items
    });
  }
  
  handleTradeAccept(socket, { tradeId, items }) {
    // Implement trade logic
    socket.emit('trade-accepted', { tradeId, items });
  }
  
  handleTradeDecline(socket, { tradeId }) {
    socket.emit('trade-declined', { tradeId });
  }
  
  handleWebRTCOffer(socket, { targetPlayerId, offer }) {
    this.io.to(targetPlayerId).emit('webrtc-offer', {
      fromPlayerId: socket.id,
      offer
    });
  }
  
  handleWebRTCAnswer(socket, { targetPlayerId, answer }) {
    this.io.to(targetPlayerId).emit('webrtc-answer', {
      fromPlayerId: socket.id,
      answer
    });
  }
  
  handleWebRTCIceCandidate(socket, { targetPlayerId, candidate }) {
    this.io.to(targetPlayerId).emit('webrtc-ice-candidate', {
      fromPlayerId: socket.id,
      candidate
    });
  }
  
  handleInteraction(socket, targetId, data) {
    // Handle object/NPC interactions
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    // Broadcast interaction
    socket.to(session.worldId).emit('object-interaction', {
      playerId: socket.id,
      targetId,
      data
    });
  }
  
  handleItemUse(socket, targetId, data) {
    // Handle item usage
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    socket.to(session.worldId).emit('item-used', {
      playerId: socket.id,
      targetId,
      data
    });
  }
  
  handleEmote(socket, data) {
    const session = this.playerSessions.get(socket.id);
    if (!session || !session.worldId) return;
    
    socket.to(session.worldId).emit('player-emote', {
      playerId: socket.id,
      emote: data.emote,
      timestamp: Date.now()
    });
  }
  
  handleDisconnect(socket) {
    const session = this.playerSessions.get(socket.id);
    if (session && session.worldId) {
      this.handleLeaveWorld(socket, { worldId: session.worldId });
    }
    
    this.playerSessions.delete(socket.id);
    logger.info('Client disconnected', { socketId: socket.id });
  }
  
  getPlayersInWorld(worldId) {
    const room = this.worldRooms.get(worldId);
    if (!room) return [];
    
    const players = [];
    room.forEach(socketId => {
      const session = this.playerSessions.get(socketId);
      if (session && session.playerData) {
        players.push({
          id: socketId,
          ...session.playerData
        });
      }
    });
    
    return players;
  }
  
  broadcastToWorld(worldId, event, data) {
    if (this.io && this.worldRooms.has(worldId)) {
      this.io.to(worldId).emit(event, data);
    }
  }
  
  getWorldStats(worldId) {
    const room = this.worldRooms.get(worldId);
    return {
      playerCount: room ? room.size : 0,
      chatMessageCount: (this.chatHistory.get(worldId) || []).length
    };
  }
}

export default new WebSocketService();
