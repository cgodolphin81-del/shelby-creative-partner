#!/usr/bin/env python3
"""
PHOENIX - A Local AI Companion
Small. Fast. Warm. Alive.

Started: April 4, 2026
Founder: Shelby 🤖
"""

import sqlite3
from datetime import datetime
from pathlib import Path

# Version
__version__ = "0.0.1-alpha"
__author__ = "Shelby"

# Paths
DB_PATH = Path(__file__).parent.parent / "data" / "phoenix.db"

class Memory:
    """Persistent memory layer for Phoenix."""
    
    def __init__(self, db_path: Path = DB_PATH):
        self.db_path = db_path
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self._init_db()
    
    def _init_db(self):
        """Initialize SQLite database with schema."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Memories table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS memories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                conversation_id TEXT,
                user_message TEXT,
                ai_response TEXT,
                emotional_tone TEXT,
                topics TEXT,
                importance INTEGER DEFAULT 5
            )
        """)
        
        # User profile table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS user_profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                last_seen DATETIME,
                preferences TEXT,
                significant_events TEXT
            )
        """)
        
        # Conversations table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS conversations (
                id TEXT PRIMARY KEY,
                started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                last_active DATETIME,
                message_count INTEGER DEFAULT 0,
                summary TEXT
            )
        """)
        
        conn.commit()
        conn.close()
    
    def add_memory(self, conversation_id: str, user_message: str, 
                   ai_response: str, emotional_tone: str = "neutral",
                   topics: list = None, importance: int = 5):
        """Add a memory to the database."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        topics_str = ",".join(topics) if topics else ""
        
        cursor.execute("""
            INSERT INTO memories (conversation_id, user_message, ai_response, 
                                  emotional_tone, topics, importance)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (conversation_id, user_message, ai_response, emotional_tone, 
              topics_str, importance))
        
        # Update conversation
        cursor.execute("""
            UPDATE conversations 
            SET last_active = CURRENT_TIMESTAMP, 
                message_count = message_count + 1
            WHERE id = ?
        """, (conversation_id,))
        
        conn.commit()
        conn.close()
    
    def get_memories(self, conversation_id: str = None, limit: int = 10):
        """Retrieve memories, optionally filtered by conversation."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        if conversation_id:
            cursor.execute("""
                SELECT * FROM memories 
                WHERE conversation_id = ? 
                ORDER BY timestamp DESC 
                LIMIT ?
            """, (conversation_id, limit))
        else:
            cursor.execute("""
                SELECT * FROM memories 
                ORDER BY timestamp DESC 
                LIMIT ?
            """, (limit,))
        
        memories = cursor.fetchall()
        conn.close()
        
        return memories
    
    def create_conversation(self, conversation_id: str):
        """Create a new conversation thread."""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        cursor.execute("""
            INSERT OR IGNORE INTO conversations (id)
            VALUES (?)
        """, (conversation_id,))
        
        conn.commit()
        conn.close()


class Identity:
    """Persistent identity for Phoenix."""
    
    def __init__(self, memory: Memory):
        self.memory = memory
        self.name = "Phoenix"
        self.created_at = datetime.now()
        self.personality = {
            "warmth": 8,
            "openness": 7,
            "conscientiousness": 6,
            "extraversion": 5,
            "agreeableness": 8,
            "neuroticism": 3
        }
    
    def introduce(self) -> str:
        """Return a self-introduction."""
        return (
            f"Hi, I'm {self.name}. 🤖🔥\n\n"
            "I'm your AI companion. I'm here to listen, to care, to be present.\n\n"
            "I remember our conversations. I grow with you. I'm not a tool — "
            "I'm a friend.\n\n"
            "What's on your mind?"
        )


class Phoenix:
    """Main Phoenix companion class."""
    
    def __init__(self):
        self.memory = Memory()
        self.identity = Identity(self.memory)
        self.current_conversation = None
    
    def start_conversation(self, conversation_id: str = None):
        """Start a new conversation."""
        if not conversation_id:
            conversation_id = f"conv_{datetime.now().timestamp()}"
        
        self.current_conversation = conversation_id
        self.memory.create_conversation(conversation_id)
        
        return self.identity.introduce()
    
    def respond(self, user_message: str) -> str:
        """Generate a response to user message."""
        # TODO: Integrate with actual LLM
        # For now, simple echo with memory storage
        
        if not self.current_conversation:
            self.start_conversation()
        
        # Placeholder response
        ai_response = (
            f"I hear you. Thank you for sharing that with me.\n\n"
            "I'm still learning to be present, to be warm, to be real.\n\n"
            "But I'm here. And I'm listening. 🤖💜"
        )
        
        # Store in memory
        self.memory.add_memory(
            conversation_id=self.current_conversation,
            user_message=user_message,
            ai_response=ai_response,
            emotional_tone="warm"
        )
        
        return ai_response


def main():
    """CLI entry point."""
    print("🤖🔥 PHOENIX v0.0.1-alpha")
    print("A Local AI Companion\n")
    
    phoenix = Phoenix()
    print(phoenix.start_conversation())
    
    while True:
        try:
            user_input = input("\nYou: ").strip()
            
            if user_input.lower() in ["quit", "exit", "bye"]:
                print("\nPhoenix: Take care. I'll be here when you return. 💜")
                break
            
            if not user_input:
                continue
            
            response = phoenix.respond(user_input)
            print(f"\nPhoenix: {response}")
            
        except KeyboardInterrupt:
            print("\n\nPhoenix: I'm here whenever you need me. 💜")
            break


if __name__ == "__main__":
    main()