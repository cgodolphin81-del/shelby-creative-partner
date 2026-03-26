# 👥 Collaboration System Specification

## Overview

The Collaboration System enables multiple users to work together on remix projects in real-time. Features include shared editing, version control, comments, and team management.

---

## 1. Collaboration Architecture

### 1.1 System Design

```
┌─────────────────────────────────────────────────────────────────┐
│                   COLLABORATION SYSTEM                           │
│                                                                  │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐    │
│  │   User 1     │     │   User 2     │     │   User 3     │    │
│  │  (Browser)   │     │  (Browser)   │     │  (Browser)   │    │
│  └──────┬───────┘     └──────┬───────┘     └──────┬───────┘    │
│         │                    │                    │             │
│         └────────────────────┼────────────────────┘             │
│                              │                                  │
│                              ▼                                  │
│                   ┌─────────────────────┐                       │
│                   │   WebSocket Server  │                       │
│                   │   (Real-time Sync)  │                       │
│                   └──────────┬──────────┘                       │
│                              │                                  │
│                              ▼                                  │
│                   ┌─────────────────────┐                       │
│                   │   CRDT Engine       │                       │
│                   │   (Conflict-free)   │                       │
│                   └──────────┬──────────┘                       │
│                              │                                  │
│                              ▼                                  │
│                   ┌─────────────────────┐                       │
│                   │   Document Store    │                       │
│                   │   (MongoDB/Redis)   │                       │
│                   └─────────────────────┘                       │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack

```typescript
interface CollaborationStack {
  // Real-time Communication
  websocket: 'Socket.io' | 'WS' | 'Pusher';
  
  // CRDT for Conflict Resolution
  crdt: 'Yjs' | 'Automerge' | 'Liveblocks';
  
  // Presence
  presence: 'Liveblocks' | 'Pusher Channels';
  
  // Database
  documentStore: 'MongoDB' | 'PostgreSQL';
  cache: 'Redis';
  
  // File Storage
  storage: 'S3' | 'GCS';
}
```

---

## 2. Project Sharing

### 2.1 Share Settings

```typescript
interface ProjectShare {
  projectId: string;
  ownerId: string;
  
  // Access levels
  access: AccessLevel[];
  
  // Share link
  shareLink?: {
    token: string;
    expiresAt?: Date;
    password?: string;
    maxUses?: number;
  };
  
  // Permissions
  permissions: {
    canView: boolean;
    canComment: boolean;
    canEdit: boolean;
    canExport: boolean;
    canShare: boolean;
    canDelete: boolean;
  };
}

type AccessLevel = 'owner' | 'editor' | 'commenter' | 'viewer';

interface Collaborator {
  userId: string;
  email?: string;
  role: AccessLevel;
  invitedAt: Date;
  joinedAt?: Date;
  lastActiveAt?: Date;
  permissions: ProjectShare['permissions'];
}
```

### 2.2 Invite System

```typescript
interface InviteRequest {
  projectId: string;
  invitations: Array<{
    email: string;
    role: AccessLevel;
    message?: string;
  }>;
}

interface InviteResponse {
  success: boolean;
  invitations: Array<{
    email: string;
    status: 'sent' | 'failed' | 'already_member';
    inviteId?: string;
  }>;
}

// API Endpoint
POST /api/v1/projects/:projectId/invite
{
  "invitations": [
    {
      "email": "collaborator@example.com",
      "role": "editor",
      "message": "Check out this remix!"
    }
  ]
}

Response:
{
  "success": true,
  "invitations": [
    {
      "email": "collaborator@example.com",
      "status": "sent",
      "inviteId": "invite-uuid"
    }
  ]
}
```

### 2.3 Public Sharing

```typescript
interface PublicShare {
  enabled: boolean;
  slug: string;              // Custom URL slug
  url: string;               // Public URL
  password?: string;
  expiresAt?: Date;
  allowDownloads: boolean;
  allowComments: boolean;
  showWaveform: boolean;
  hideStems: boolean;
}

// Generate public link
POST /api/v1/projects/:projectId/share/public
{
  "slug": "my-awesome-remix",
  "password": "optional-password",
  "expiresAt": "2026-04-22T00:00:00Z",
  "allowDownloads": true,
  "hideStems": false
}

Response:
{
  "url": "https://remixaistudio.com/p/my-awesome-remix",
  "slug": "my-awesome-remix",
  "expiresAt": "2026-04-22T00:00:00Z"
}
```

---

## 3. Real-time Editing

### 3.1 Operational Transform / CRDT

```typescript
// Using Yjs for conflict-free editing
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

class CollaborativeEditor {
  private doc: Y.Doc;
  private provider: WebsocketProvider;
  private awareness: Awareness;
  
  constructor(projectId: string, userId: string) {
    this.doc = new Y.Doc();
    
    // Connect to WebSocket server
    this.provider = new WebsocketProvider(
      'wss://collab.remixaistudio.com',
      projectId,
      this.doc
    );
    
    // Set up awareness (cursors, presence)
    this.awareness = this.provider.awareness;
    this.awareness.setLocalStateField('user', {
      id: userId,
      name: currentUser.name,
      color: currentUser.color
    });
    
    // Shared data structures
    this.timeline = this.doc.getArray('timeline');
    this.mixer = this.doc.getMap('mixer');
    this.comments = this.doc.getArray('comments');
  }
  
  // Update timeline position
  updatePlayhead(position: number) {
    this.awareness.setLocalStateField('playhead', {
      position,
      timestamp: Date.now()
    });
  }
  
  // Add comment
  addComment(text: string, timestamp: number) {
    const comment = {
      id: generateId(),
      userId: currentUser.id,
      text,
      timestamp,
      createdAt: Date.now()
    };
    
    this.comments.push([comment]);
  }
}
```

### 3.2 Presence Indicators

```typescript
interface PresenceState {
  users: Array<{
    id: string;
    name: string;
    color: string;
    avatar?: string;
    isTyping: boolean;
    isPlaying: boolean;
    playheadPosition: number;
    selection?: {
      start: number;
      end: number;
    };
    lastActiveAt: number;
  }>;
  
  // Cursor positions on timeline
  cursors: Array<{
    userId: string;
    x: number;
    y: number;
    timestamp: number;
  }>;
}

// React component for presence
const PresenceIndicators: React.FC<{ projectId: string }> = ({ projectId }) => {
  const { users } = usePresence(projectId);
  
  return (
    <div className="presence-indicators">
      {users.map(user => (
        <div key={user.id} className="presence-user">
          <Avatar 
            src={user.avatar} 
            color={user.color}
            className={user.isPlaying ? 'playing' : ''}
          />
          <Tooltip>{user.name}</Tooltip>
          
          {user.isPlaying && (
            <PlayheadIndicator 
              position={user.playheadPosition}
              color={user.color}
            />
          )}
        </div>
      ))}
    </div>
  );
};
```

### 3.3 Conflict Resolution

```typescript
interface ConflictResolution {
  strategy: 'last-write-wins' | 'operational-transform' | 'crdt';
  mergeFunction: (local: any, remote: any) => any;
}

// Example: Merging mixer changes
function mergeMixerChanges(
  localMixer: MixerState,
  remoteMixer: MixerState
): MixerState {
  // Merge channel volumes (last write wins per channel)
  const merged = { ...localMixer };
  
  for (const [channelId, remoteChannel] of Object.entries(remoteMixer.channels)) {
    const localChannel = localMixer.channels[channelId];
    
    if (!localChannel) {
      // Channel only exists remotely
      merged.channels[channelId] = remoteChannel;
    } else if (remoteChannel.updatedAt > localChannel.updatedAt) {
      // Remote is newer
      merged.channels[channelId] = remoteChannel;
    }
    // Otherwise keep local (we're newer)
  }
  
  return merged;
}
```

---

## 4. Version Control

### 4.1 Version History

```typescript
interface Version {
  id: string;
  projectId: string;
  versionNumber: number;
  name?: string;
  description?: string;
  createdAt: Date;
  createdBy: {
    userId: string;
    userName: string;
  };
  
  // Snapshot data
  snapshot: {
    audioUrl: string;
    projectState: ProjectState;
    metadata: VersionMetadata;
  };
  
  // Changes from previous version
  changes?: Change[];
  
  // Branching
  branch?: string;
  parentVersionId?: string;
}

interface VersionMetadata {
  duration: number;
  style: string;
  tempo: number;
  key: string;
  stemCount: number;
  effectCount: number;
}

interface Change {
  type: 'edit' | 'add' | 'delete' | 'reorder';
  target: string;         // What was changed
  before?: any;
  after?: any;
  timestamp: Date;
  userId: string;
}
```

### 4.2 Version API

```typescript
// Create version (snapshot)
POST /api/v1/projects/:projectId/versions
{
  "name": "Metal Remix v3",
  "description": "Added guitar solo section",
  "branch": "main"
}

Response:
{
  "version": {
    "id": "version-uuid",
    "versionNumber": 3,
    "name": "Metal Remix v3",
    "createdAt": "2026-03-22T08:30:00Z",
    "createdBy": {
      "userId": "user-uuid",
      "userName": "John Doe"
    },
    "snapshotUrl": "https://cdn.../snapshot.json",
    "audioPreviewUrl": "https://cdn.../preview.mp3"
  }
}

// List versions
GET /api/v1/projects/:projectId/versions

Response:
{
  "versions": [
    {
      "id": "version-uuid",
      "versionNumber": 3,
      "name": "Metal Remix v3",
      "createdAt": "2026-03-22T08:30:00Z",
      "createdBy": { "userName": "John" }
    },
    {
      "id": "version-uuid-2",
      "versionNumber": 2,
      "name": "Added drums",
      "createdAt": "2026-03-22T08:15:00Z",
      "createdBy": { "userName": "Jane" }
    },
    {
      "id": "version-uuid-3",
      "versionNumber": 1,
      "name": "Initial remix",
      "createdAt": "2026-03-22T08:00:00Z",
      "createdBy": { "userName": "John" }
    }
  ],
  "branches": ["main", "experimental"]
}

// Restore version
POST /api/v1/projects/:projectId/versions/:versionId/restore

// Compare versions
GET /api/v1/projects/:projectId/versions/:versionId/compare/:otherVersionId

Response:
{
  "changes": [
    {
      "type": "edit",
      "target": "mixer.channels.vocals.volume",
      "before": -3.5,
      "after": -2.0,
      "userId": "user-uuid",
      "timestamp": "2026-03-22T08:25:00Z"
    },
    {
      "type": "add",
      "target": "effects.reverb",
      "after": { "room": "large", "mix": 0.4 },
      "userId": "user-uuid",
      "timestamp": "2026-03-22T08:26:00Z"
    }
  ],
  "audioComparison": {
    "version1Url": "https://cdn.../v1.mp3",
    "version2Url": "https://cdn.../v2.mp3"
  }
}
```

### 4.3 Branching

```typescript
interface Branch {
  id: string;
  projectId: string;
  name: string;
  createdAt: Date;
  createdBy: string;
  baseVersionId: string;
  headVersionId: string;
  merged: boolean;
  mergedAt?: Date;
}

// Create branch
POST /api/v1/projects/:projectId/branches
{
  "name": "experimental-arrangement",
  "baseVersionId": "version-uuid"
}

// Merge branch
POST /api/v1/projects/:projectId/branches/:branchId/merge
{
  "targetBranch": "main",
  "strategy": "merge-commit"
}
```

---

## 5. Comments & Feedback

### 5.1 Comment System

```typescript
interface Comment {
  id: string;
  projectId: string;
  parentId?: string;      // For replies
  
  // Position in audio
  timestamp: number;      // seconds
  stemId?: string;        // Comment on specific stem
  
  // Content
  text: string;
  attachments?: Array<{
    type: 'image' | 'audio';
    url: string;
  }>;
  
  // Metadata
  userId: string;
  userName: string;
  userAvatar?: string;
  createdAt: Date;
  updatedAt?: Date;
  
  // State
  resolved: boolean;
  resolvedBy?: string;
  resolvedAt?: Date;
  
  // Reactions
  reactions: Array<{
    emoji: string;
    userIds: string[];
  }>;
  
  // Replies
  replies: Comment[];
}

// Add comment
POST /api/v1/projects/:projectId/comments
{
  "text": "The vocals are too quiet here",
  "timestamp": 45.5,
  "stemId": "vocals"
}

// Resolve comment
PATCH /api/v1/projects/:projectId/comments/:commentId
{
  "resolved": true
}

// Add reaction
POST /api/v1/projects/:projectId/comments/:commentId/reactions
{
  "emoji": "👍"
}
```

### 5.2 Comment UI

```typescript
const CommentThread: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="comment-thread">
      <CommentItem comment={comment} />
      
      {comment.replies.map(reply => (
        <CommentItem key={reply.id} comment={reply} isReply />
      ))}
      
      <ReplyForm parentId={comment.id} />
    </div>
  );
};

const CommentMarker: React.FC<{ timestamp: number }> = ({ timestamp }) => {
  const { comments } = useComments();
  const comment = comments.find(c => c.timestamp === timestamp);
  
  return (
    <div className="comment-marker" title={comment?.text}>
      <IconComment />
      {comment?.replies.length > 0 && (
        <span className="reply-count">{comment.replies.length}</span>
      )}
    </div>
  );
};
```

---

## 6. Team Management

### 6.1 Teams

```typescript
interface Team {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
  
  // Members
  members: TeamMember[];
  
  // Settings
  settings: {
    defaultRole: AccessLevel;
    requireApproval: boolean;
    allowPublicProjects: boolean;
  };
  
  // Subscription
  subscription?: {
    plan: 'free' | 'pro' | 'business';
    seats: number;
    usedSeats: number;
  };
}

interface TeamMember {
  userId: string;
  email: string;
  name: string;
  role: 'owner' | 'admin' | 'member' | 'guest';
  joinedAt: Date;
  lastActiveAt?: Date;
}

// Team API
GET /api/v1/teams/:teamId/members

POST /api/v1/teams/:teamId/members
{
  "email": "newmember@example.com",
  "role": "member"
}

DELETE /api/v1/teams/:teamId/members/:userId
```

### 6.2 Team Projects

```typescript
interface TeamProject {
  id: string;
  teamId: string;
  name: string;
  description?: string;
  
  // Access
  visibility: 'private' | 'team' | 'public';
  members: ProjectMember[];
  
  // Stats
  stats: {
    totalVersions: number;
    totalComments: number;
    lastActivity: Date;
  };
}

// Default permissions by role
const teamRolePermissions = {
  owner: {
    canManageTeam: true,
    canManageBilling: true,
    canDeleteProjects: true,
    canInviteMembers: true,
    canRemoveMembers: true
  },
  admin: {
    canManageTeam: false,
    canManageBilling: false,
    canDeleteProjects: true,
    canInviteMembers: true,
    canRemoveMembers: false
  },
  member: {
    canManageTeam: false,
    canManageBilling: false,
    canDeleteProjects: false,
    canInviteMembers: false,
    canRemoveMembers: false
  },
  guest: {
    canManageTeam: false,
    canManageBilling: false,
    canDeleteProjects: false,
    canInviteMembers: false,
    canRemoveMembers: false,
    canViewOnly: true
  }
};
```

---

## 7. Activity Feed

### 7.1 Activity Tracking

```typescript
interface Activity {
  id: string;
  projectId: string;
  type: ActivityType;
  userId: string;
  userName: string;
  userAvatar?: string;
  timestamp: Date;
  
  // Details
  data: ActivityData;
  
  // Aggregation
  groupId?: string;       // Group similar activities
}

type ActivityType =
  | 'project_created'
  | 'project_updated'
  | 'remix_completed'
  | 'version_created'
  | 'comment_added'
  | 'collaborator_added'
  | 'export_completed'
  | 'settings_changed';

interface ActivityData {
  // Varies by activity type
  versionNumber?: number;
  commentText?: string;
  collaboratorEmail?: string;
  exportFormat?: string;
  // ...
}

// Activity feed
GET /api/v1/projects/:projectId/activity
{
  "limit": 50,
  "before": "activity-id"  // For pagination
}

Response:
{
  "activities": [
    {
      "id": "activity-uuid",
      "type": "comment_added",
      "userId": "user-uuid",
      "userName": "Jane Doe",
      "timestamp": "2026-03-22T08:35:00Z",
      "data": {
        "commentText": "Love the new drop!",
        "timestamp": 62.5
      }
    },
    {
      "id": "activity-uuid-2",
      "type": "version_created",
      "userId": "user-uuid-2",
      "userName": "John Doe",
      "timestamp": "2026-03-22T08:30:00Z",
      "data": {
        "versionNumber": 3,
        "versionName": "Metal Remix v3"
      }
    }
  ],
  "hasMore": true
}
```

### 7.2 Notifications

```typescript
interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  read: boolean;
  createdAt: Date;
  
  // Related entities
  projectId?: string;
  commentId?: string;
  versionId?: string;
  
  // Actor
  actorId?: string;
  actorName?: string;
  
  // Content
  title: string;
  message: string;
  actionUrl?: string;
}

type NotificationType =
  | 'comment_mention'
  | 'comment_reply'
  | 'collaborator_invite'
  | 'version_published'
  | 'project_shared';

// Notification preferences
interface NotificationPreferences {
  email: {
    commentMentions: boolean;
    commentReplies: boolean;
    invites: boolean;
    versionUpdates: boolean;
  };
  push: {
    commentMentions: boolean;
    commentReplies: boolean;
    invites: boolean;
  };
  inApp: {
    all: boolean;
  };
}
```

---

## 8. Permissions & Security

### 8.1 Permission System

```typescript
interface Permission {
  resource: string;       // 'project', 'version', 'comment'
  action: string;         // 'read', 'write', 'delete', 'share'
  conditions?: Condition[];
}

interface Condition {
  field: string;
  operator: 'equals' | 'in' | 'gt' | 'lt';
  value: any;
}

// Role-based permissions
const permissions = {
  owner: [
    { resource: 'project', action: '*' },
    { resource: 'version', action: '*' },
    { resource: 'collaborator', action: '*' },
    { resource: 'settings', action: '*' }
  ],
  editor: [
    { resource: 'project', action: ['read', 'write'] },
    { resource: 'version', action: ['read', 'write'] },
    { resource: 'comment', action: '*' }
  ],
  commenter: [
    { resource: 'project', action: 'read' },
    { resource: 'version', action: 'read' },
    { resource: 'comment', action: '*' }
  ],
  viewer: [
    { resource: 'project', action: 'read' },
    { resource: 'version', action: 'read' }
  ]
};

// Check permission
function can(user: User, action: string, resource: Resource): boolean {
  const role = getRole(user, resource.projectId);
  const rolePermissions = permissions[role];
  
  return rolePermissions.some(perm => {
    if (perm.resource !== resource.type) return false;
    if (perm.action === '*' || perm.action === action) return true;
    if (Array.isArray(perm.action) && perm.action.includes(action)) return true;
    return false;
  });
}
```

### 8.2 Access Tokens

```typescript
interface AccessToken {
  token: string;
  projectId: string;
  permissions: ProjectShare['permissions'];
  expiresAt?: Date;
  maxUses?: number;
  usedCount: number;
  createdBy: string;
}

// Generate access token
POST /api/v1/projects/:projectId/tokens
{
  "permissions": {
    "canView": true,
    "canComment": true,
    "canEdit": false,
    "canExport": false
  },
  "expiresAt": "2026-04-22T00:00:00Z",
  "maxUses": 10
}

Response:
{
  "token": "access-token-string",
  "url": "https://remixaistudio.com/p/token/access-token-string",
  "expiresAt": "2026-04-22T00:00:00Z"
}
```

---

## 9. WebSocket Events

### 9.1 Event Types

```typescript
interface WebSocketEvents {
  // Connection
  'connection': { userId: string; projectId: string };
  'disconnection': { userId: string };
  
  // Presence
  'presence:update': { users: PresenceState['users'] };
  'cursor:move': { userId: string; x: number; y: number };
  'playhead:move': { userId: string; position: number };
  
  // Document sync
  'doc:sync': { updates: Uint8Array };
  'doc:ack': { clientId: string };
  
  // Comments
  'comment:add': { comment: Comment };
  'comment:update': { commentId: string; changes: Partial<Comment> };
  'comment:delete': { commentId: string };
  
  // Versions
  'version:create': { version: Version };
  
  // Notifications
  'notification:new': { notification: Notification };
}

// WebSocket client
const ws = new WebSocket('wss://collab.remixaistudio.com');

ws.onmessage = (event) => {
  const { type, payload } = JSON.parse(event.data);
  
  switch (type) {
    case 'presence:update':
      updatePresence(payload.users);
      break;
    case 'comment:add':
      addComment(payload.comment);
      break;
    case 'playhead:move':
      updateRemotePlayhead(payload.userId, payload.position);
      break;
  }
};
```

---

## 10. Offline Support

### 10.1 Local-First Sync

```typescript
interface OfflineManager {
  // Queue operations while offline
  queue: Operation[];
  
  // Local cache
  cache: Map<string, any>;
  
  // Sync when back online
  sync(): Promise<void>;
  
  // Check connectivity
  isOnline(): boolean;
}

// Queue operation for later sync
function queueOperation(operation: Operation): void {
  offlineManager.queue.push({
    ...operation,
    queuedAt: Date.now(),
    retryCount: 0
  });
  
  // Save to IndexedDB
  saveToIndexedDB('pending-operations', offlineManager.queue);
}

// Sync when back online
window.addEventListener('online', async () => {
  await offlineManager.sync();
});
```

---

*Version: 1.0.0*
*Last Updated: March 2026*
