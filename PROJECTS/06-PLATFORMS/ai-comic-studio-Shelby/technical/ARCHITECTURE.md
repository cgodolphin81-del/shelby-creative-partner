# ComicForge AI - Technical Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│  Web App (React)  │  Mobile App  │  Desktop App  │  API Clients │
└─────────┬─────────┴──────┬───────┴──────┬───────┴───────┬────────┘
          │                │              │               │
          └────────────────┴──────────────┴───────────────┘
                                   │
                          ┌────────▼────────┐
                          │   Load Balancer │
                          │  (AWS ALB/NGINX)│
                          └────────┬────────┘
                                   │
┌──────────────────────────────────▼──────────────────────────────┐
│                      API GATEWAY LAYER                           │
├─────────────────────────────────────────────────────────────────┤
│  Rate Limiting  │  Authentication  │  Routing  │  Monitoring   │
└─────────────────────────────────────────────────────────────────┘
                                   │
          ┌────────────────────────┼────────────────────────┐
          │                        │                        │
┌─────────▼─────────┐   ┌──────────▼──────────┐   ┌────────▼────────┐
│   Core Services   │   │    AI Services      │   │  Edge Services  │
│   (Node.js/Python)│   │   (Python/GPU)      │   │   (CDN/Cache)   │
└─────────┬─────────┘   └──────────┬──────────┘   └────────┬────────┘
          │                        │                        │
          │                        │                        │
┌─────────▼────────────────────────▼────────────────────────▼────────┐
│                         DATA LAYER                                  │
├────────────────────────────────────────────────────────────────────┤
│  PostgreSQL  │  MongoDB  │  Redis  │  S3  │  Vector DB  │  Queue  │
└────────────────────────────────────────────────────────────────────┘
```

---

## Core Services Architecture

### 1. User Service
**Purpose:** Authentication, authorization, user management

**Endpoints:**
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
GET    /api/v1/users/me
PUT    /api/v1/users/me
DELETE /api/v1/users/me
GET    /api/v1/users/:id/profile
```

**Database Schema:**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    display_name VARCHAR(100),
    avatar_url TEXT,
    bio TEXT,
    subscription_tier VARCHAR(20) DEFAULT 'free',
    subscription_status VARCHAR(20) DEFAULT 'active',
    subscription_expires_at TIMESTAMP,
    storage_used_bytes BIGINT DEFAULT 0,
    storage_limit_bytes BIGINT DEFAULT 524288000, -- 500MB free
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP,
    email_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    plan_type VARCHAR(20) NOT NULL, -- free, pro, commercial
    billing_cycle VARCHAR(20) NOT NULL, -- monthly, annual
    stripe_subscription_id VARCHAR(255),
    status VARCHAR(20) NOT NULL, -- active, canceled, past_due
    current_period_start TIMESTAMP,
    current_period_end TIMESTAMP,
    cancel_at_period_end BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 2. Project Service
**Purpose:** Comic project management, metadata, organization

**Endpoints:**
```
GET    /api/v1/projects
POST   /api/v1/projects
GET    /api/v1/projects/:id
PUT    /api/v1/projects/:id
DELETE /api/v1/projects/:id
GET    /api/v1/projects/:id/pages
POST   /api/v1/projects/:id/pages
GET    /api/v1/projects/:id/collaborators
POST   /api/v1/projects/:id/collaborators
DELETE /api/v1/projects/:id/collaborators/:userId
```

**Database Schema:**
```sql
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    genre VARCHAR(100),
    art_style VARCHAR(100),
    status VARCHAR(20) DEFAULT 'draft', -- draft, in_progress, published, archived
    visibility VARCHAR(20) DEFAULT 'private', -- private, unlisted, public
    page_count INTEGER DEFAULT 0,
    cover_image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    published_at TIMESTAMP
);

CREATE TABLE project_collaborators (
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    role VARCHAR(20) NOT NULL, -- owner, writer, artist, colorist, letterer, editor, viewer
    permissions JSONB,
    invited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    accepted_at TIMESTAMP,
    PRIMARY KEY (project_id, user_id)
);

CREATE TABLE pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    page_number INTEGER NOT NULL,
    title VARCHAR(255),
    canvas_data JSONB, -- Full canvas state
    thumbnail_url TEXT,
    status VARCHAR(20) DEFAULT 'draft', -- draft, in_review, approved, published
    version INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(project_id, page_number)
);
```

---

### 3. Character Service
**Purpose:** Character creation, management, consistency

**Endpoints:**
```
GET    /api/v1/characters
POST   /api/v1/characters
GET    /api/v1/characters/:id
PUT    /api/v1/characters/:id
DELETE /api/v1/characters/:id
POST   /api/v1/characters/:id/generate-variant
GET    /api/v1/characters/:id/poses
POST   /api/v1/characters/:id/poses
GET    /api/v1/characters/:id/consistency-check
```

**Database Schema:**
```sql
CREATE TABLE characters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    creator_id UUID REFERENCES users(id),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    appearance_data JSONB, -- Facial features, body type, etc.
    costume_data JSONB, -- Clothing, accessories
    powers JSONB, -- Abilities and effects
    personality JSONB, -- Traits, archetype
    backstory TEXT,
    character_embedding VECTOR(512), -- For AI consistency
    reference_images TEXT[], -- Array of image URLs
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE character_poses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    character_id UUID REFERENCES characters(id) ON DELETE CASCADE,
    pose_name VARCHAR(100),
    pose_data JSONB, -- Bone positions, camera angle
    image_url TEXT,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**AI Integration:**
```python
class CharacterConsistencyEngine:
    def __init__(self):
        self.model = load_lora_model("character_consistency_v2")
        self.embedding_model = load_clip_model()
    
    def generate_character_embedding(self, character_data: dict) -> np.ndarray:
        """Generate unique embedding for character consistency"""
        # Extract key features
        features = self._extract_features(character_data)
        embedding = self.embedding_model.encode(features)
        return embedding
    
    def generate_pose(self, character: Character, pose_description: str) -> Image:
        """Generate character in specific pose while maintaining consistency"""
        prompt = self._build_prompt(character, pose_description)
        controlnet_input = self._prepare_controlnet(character.reference_images[0])
        
        image = self.model.generate(
            prompt=prompt,
            character_embedding=character.character_embedding,
            controlnet=controlnet_input,
            strength=0.75
        )
        return image
    
    def verify_consistency(self, image: Image, character: Character) -> float:
        """Return consistency score (0-1)"""
        image_embedding = self.embedding_model.encode(image)
        similarity = cosine_similarity(
            image_embedding, 
            character.character_embedding
        )
        return similarity
```

---

### 4. Story Service
**Purpose:** Script management, plot generation, dialogue assistance

**Endpoints:**
```
GET    /api/v1/stories
POST   /api/v1/stories
GET    /api/v1/stories/:id
PUT    /api/v1/stories/:id
POST   /api/v1/stories/:id/generate-outline
POST   /api/v1/stories/:id/generate-script
GET    /api/v1/stories/:id/beats
PUT    /api/v1/stories/:id/beats
POST   /api/v1/stories/:id/dialogue/suggest
POST   /api/v1/stories/:id/dialogue/improve
```

**Database Schema:**
```sql
CREATE TABLE stories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    logline TEXT,
    synopsis TEXT,
    genre VARCHAR(100),
    structure_type VARCHAR(50), -- three_act, heros_journey, kishotenketsu
    target_page_count INTEGER,
    outline JSONB, -- Act/scene structure
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE script_pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
    page_number INTEGER NOT NULL,
    panel_descriptions JSONB, -- Array of panel descriptions
    dialogue JSONB, -- Character dialogue per panel
    captions JSONB, -- Narration captions
    sfx JSONB, -- Sound effects
    notes TEXT,
    version INTEGER DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**AI Story Generation:**
```python
class StoryGenerator:
    def __init__(self):
        self.llm = load_finetuned_llm("narrative_model_v3")
        self.structure_templates = self._load_templates()
    
    def generate_outline(self, genre: str, logline: str, 
                        structure: str = "three_act") -> dict:
        """Generate story outline based on structure"""
        template = self.structure_templates[structure]
        
        prompt = f"""
        Generate a {structure} story outline for a {genre} comic.
        
        Logline: {logline}
        
        Template structure:
        {json.dumps(template, indent=2)}
        
        Provide detailed beats for each section.
        """
        
        outline = self.llm.generate(prompt, max_tokens=2000)
        return self._parse_outline(outline)
    
    def generate_panel_script(self, beat: dict, page_num: int) -> dict:
        """Generate detailed panel descriptions for a beat"""
        prompt = f"""
        Convert this story beat into comic panel descriptions.
        
        Beat: {beat['description']}
        Page: {page_num}
        Emotional tone: {beat['emotion']}
        
        Include:
        - Panel count (3-6 panels)
        - Camera angles
        - Character actions
        - Key visual elements
        """
        
        panels = self.llm.generate(prompt, max_tokens=1000)
        return self._parse_panels(panels)
    
    def suggest_dialogue(self, character: Character, 
                        context: str) -> list[str]:
        """Generate dialogue options based on character personality"""
        prompt = f"""
        Write dialogue for this character in this situation.
        
        Character traits: {character.personality}
        Situation: {context}
        Character voice: {character.voice_tone}
        
        Provide 3 variations with different subtext.
        """
        
        return self.llm.generate(prompt, max_tokens=300)
```

---

### 5. Asset Service
**Purpose:** File storage, CDN delivery, asset management

**Endpoints:**
```
POST   /api/v1/assets/upload
GET    /api/v1/assets/:id
DELETE /api/v1/assets/:id
GET    /api/v1/assets/:id/download
GET    /api/v1/assets/:id/thumbnail
POST   /api/v1/assets/bulk-upload
GET    /api/v1/assets?type=image&project_id=xxx
```

**Database Schema:**
```sql
CREATE TABLE assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES users(id),
    project_id UUID REFERENCES projects(id),
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255),
    mime_type VARCHAR(100),
    file_size_bytes BIGINT,
    storage_path TEXT NOT NULL, -- S3 key
    cdn_url TEXT,
    thumbnail_url TEXT,
    metadata JSONB, -- Dimensions, duration, etc.
    tags TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for fast project asset lookup
CREATE INDEX idx_assets_project ON assets(project_id);
CREATE INDEX idx_assets_owner ON assets(owner_id);
```

**Upload Handler:**
```python
class AssetUploader:
    def __init__(self):
        self.s3 = boto3.client('s3')
        self.cdn = cloudflare_client()
    
    async def upload(self, file: UploadFile, user: User, 
                    project_id: UUID = None) -> Asset:
        # Validate storage quota
        await self._check_quota(user, file.size)
        
        # Generate unique path
        file_key = self._generate_key(user.id, file.filename)
        
        # Upload to S3
        await self.s3.upload_fileobj(
            file.file,
            BUCKET_NAME,
            file_key,
            ExtraArgs={
                'ContentType': file.content_type,
                'ACL': 'private'
            }
        )
        
        # Generate CDN URL
        cdn_url = self.cdn.create_signed_url(file_key)
        
        # Generate thumbnail if image
        thumbnail_url = None
        if file.content_type.startswith('image/'):
            thumbnail_url = await self._generate_thumbnail(file_key)
        
        # Save to database
        asset = await self._save_asset_record(
            user_id=user.id,
            project_id=project_id,
            filename=file.filename,
            file_size=file.size,
            storage_path=file_key,
            cdn_url=cdn_url,
            thumbnail_url=thumbnail_url
        )
        
        # Update user storage usage
        await self._update_storage_usage(user.id, file.size)
        
        return asset
```

---

### 6. Collaboration Service
**Purpose:** Real-time collaboration, comments, version control

**Endpoints:**
```
WS     /ws/collaboration/:projectId
GET    /api/v1/collaboration/:projectId/sessions
POST   /api/v1/collaboration/:projectId/comments
GET    /api/v1/collaboration/:projectId/comments
PUT    /api/v1/collaboration/:projectId/comments/:id
DELETE /api/v1/collaboration/:projectId/comments/:id
GET    /api/v1/collaboration/:projectId/versions
POST   /api/v1/collaboration/:projectId/versions/checkpoint
GET    /api/v1/collaboration/:projectId/versions/:versionId/restore
```

**WebSocket Handler:**
```python
class CollaborationWebSocket:
    def __init__(self):
        self.rooms = {}  # project_id -> set of connections
        self.ot_engine = OperationTransformEngine()
    
    async def connect(self, websocket: WebSocket, project_id: UUID, 
                     user_id: UUID):
        # Authenticate user
        user = await self._authenticate(websocket)
        
        # Check project access
        has_access = await self._check_access(project_id, user.id)
        if not has_access:
            await websocket.close(code=4003)
            return
        
        # Join room
        await self._join_room(project_id, websocket)
        
        # Send current state
        state = await self._get_project_state(project_id)
        await websocket.send_json(state)
        
        # Notify others
        await self._broadcast(project_id, {
            'type': 'user_joined',
            'user_id': user.id,
            'timestamp': datetime.utcnow().isoformat()
        })
    
    async def receive_operation(self, websocket: WebSocket, 
                               operation: dict):
        # Transform operation against concurrent ops
        transformed_op = self.ot_engine.transform(
            operation, 
            self._get_pending_ops(operation['project_id'])
        )
        
        # Apply to database
        await self._apply_operation(transformed_op)
        
        # Broadcast to others
        await self._broadcast(
            operation['project_id'],
            {
                'type': 'operation',
                'operation': transformed_op,
                'user_id': operation['user_id'],
                'timestamp': datetime.utcnow().isoformat()
            },
            exclude=websocket
        )
        
        # Save to version history
        await self._save_version_snapshot(operation['project_id'])
```

**Version Control:**
```python
class VersionControl:
    def create_checkpoint(self, project_id: UUID, user_id: UUID, 
                         message: str) -> Version:
        """Create a manual version checkpoint"""
        # Get current project state
        state = self._get_project_state(project_id)
        
        # Compress and store
        compressed = gzip.compress(json.dumps(state).encode())
        version_id = self._store_version(project_id, compressed)
        
        # Create version record
        version = Version(
            id=version_id,
            project_id=project_id,
            user_id=user_id,
            message=message,
            created_at=datetime.utcnow()
        )
        
        return version
    
    def diff_versions(self, version_a: UUID, 
                     version_b: UUID) -> dict:
        """Compare two versions and return differences"""
        state_a = self._get_version_state(version_a)
        state_b = self._get_version_state(version_b)
        
        diff = {
            'pages_added': [],
            'pages_removed': [],
            'pages_modified': [],
            'characters_added': [],
            'characters_modified': []
        }
        
        # Calculate diffs
        diff['pages_added'] = self._find_added(
            state_a['pages'], state_b['pages']
        )
        diff['pages_modified'] = self._find_modified(
            state_a['pages'], state_b['pages']
        )
        
        return diff
    
    def restore_version(self, project_id: UUID, 
                       version_id: UUID) -> bool:
        """Restore project to a previous version"""
        version_state = self._get_version_state(version_id)
        
        # Create new version before restore (undo point)
        self.create_checkpoint(
            project_id, 
            'system', 
            f'Auto-checkpoint before restore to {version_id}'
        )
        
        # Restore state
        self._apply_project_state(project_id, version_state)
        
        return True
```

---

### 7. Publishing Service
**Purpose:** Export, format conversion, platform integration

**Endpoints:**
```
POST   /api/v1/publish/:projectId/export
GET    /api/v1/publish/:projectId/export/:jobId/status
POST   /api/v1/publish/:projectId/webtoon
POST   /api/v1/publish/:projectId/pdf
GET    /api/v1/publish/:projectId/platforms
POST   /api/v1/publish/:projectId/platform/:platformId/publish
```

**Export Pipeline:**
```python
class ExportPipeline:
    def __init__(self):
        self.queue = rq.Queue('exports', connection=redis)
    
    def request_export(self, project_id: UUID, format: str, 
                      options: dict) -> ExportJob:
        """Queue an export job"""
        job = self.queue.enqueue(
            self._process_export,
            project_id,
            format,
            options,
            job_timeout=3600  # 1 hour timeout
        )
        
        export_job = ExportJob(
            id=job.id,
            project_id=project_id,
            format=format,
            options=options,
            status='pending'
        )
        
        return export_job
    
    def _process_export(self, project_id: UUID, format: str, 
                       options: dict):
        """Process export job"""
        # Get project data
        project = self._get_project(project_id)
        pages = self._get_pages(project_id)
        
        if format == 'pdf':
            return self._export_pdf(project, pages, options)
        elif format == 'webtoon':
            return self._export_webtoon(project, pages, options)
        elif format == 'png':
            return self._export_png(project, pages, options)
    
    def _export_webtoon(self, project: Project, pages: list, 
                       options: dict) -> str:
        """Export for Webtoon vertical format"""
        # Webtoon specs: 800px width, variable height
        width = 800
        
        # Combine pages into vertical strip
        combined_height = sum(page.height for page in pages)
        combined = Image.new('RGB', (width, combined_height))
        
        y_offset = 0
        for page in pages:
            # Resize page to 800px width
            page_image = self._load_page_image(page)
            ratio = width / page_image.width
            new_height = int(page_image.height * ratio)
            resized = page_image.resize((width, new_height))
            
            # Add to combined image
            combined.paste(resized, (0, y_offset))
            y_offset += new_height + 20  # 20px gutter
        
        # Optimize for web
        combined = self._optimize_for_web(combined, quality=85)
        
        # Upload to CDN
        url = self._upload_to_cdn(combined, project.id)
        
        return url
```

---

## AI/ML Infrastructure

### Model Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    AI Gateway                                │
│  (Route requests to appropriate models, rate limiting)      │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┬────────────────┐
        │            │            │                │
┌───────▼───────┐ ┌──▼────────┐ ┌─▼──────────┐ ┌─▼──────────┐
│ Character     │ │ Style     │ │ Story      │ │ Dialogue   │
│ Generator     │ │ Transfer  │ │ Generator  │ │ Assistant  │
│ (SDXL+LoRA)   │ │ (Custom)  │ │ (LLM)      │ │ (LLM)      │
└───────┬───────┘ └───┬───────┘ └─┬──────────┘ └─┬──────────┘
        │             │           │               │
        └─────────────┴───────────┴───────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   GPU Cluster     │
                    │   (8x A100)       │
                    │   Kubernetes      │
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │   Model Registry  │
                    │   (MLflow)        │
                    └───────────────────┘
```

### Character Generation Pipeline

```python
class CharacterGenerationPipeline:
    def __init__(self):
        self.base_model = StableDiffusionXL.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0"
        )
        self.lora_adapter = LoRAAdapter()
        self.controlnet = ControlNetModel.from_pretrained(
            "lllyasviel/control_v11p_sd15_openpose"
        )
        self.face_embedding_model = ArcFace()
    
    def generate_character(self, prompt: str, 
                          appearance: dict) -> CharacterSheet:
        """Generate full character sheet"""
        # Generate base character
        base_image = self.base_model.generate(
            prompt=prompt,
            width=1024,
            height=1024,
            num_inference_steps=50
        )
        
        # Generate multiple views
        views = {
            'front': self._generate_view(base_image, 'front view'),
            'side': self._generate_view(base_image, 'side view'),
            'back': self._generate_view(base_image, 'back view'),
            'expression_sheet': self._generate_expressions(base_image)
        }
        
        # Generate embedding for consistency
        embedding = self.face_embedding_model.encode(views['front'])
        
        return CharacterSheet(
            views=views,
            embedding=embedding,
            metadata=appearance
        )
    
    def generate_pose(self, character: Character, 
                     pose_description: str) -> Image:
        """Generate character in specific pose"""
        # Get pose skeleton from description
        pose_skeleton = self._text_to_pose(pose_description)
        
        # Generate with ControlNet
        image = self.base_model.generate(
            prompt=f"{character.description}, {pose_description}",
            controlnet_image=pose_skeleton,
            controlnet_conditioning_scale=0.8,
            lora_weights=character.lora_weights,
            strength=0.75
        )
        
        # Verify consistency
        consistency = self._check_consistency(image, character.embedding)
        if consistency < 0.85:
            # Regenerate with higher consistency weight
            image = self._regenerate_with_consistency(
                image, character, pose_description
            )
        
        return image
```

---

## Infrastructure & DevOps

### Kubernetes Configuration

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: comicforge-api
spec:
  replicas: 5
  selector:
    matchLabels:
      app: comicforge-api
  template:
    metadata:
      labels:
        app: comicforge-api
    spec:
      containers:
      - name: api
        image: comicforge/api:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: redis-secret
              key: url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: comicforge-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: comicforge-api
  minReplicas: 5
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linting
      run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Build Docker image
      run: |
        docker build -t comicforge/api:${{ github.sha }} .
        docker tag comicforge/api:${{ github.sha }} comicforge/api:latest
    
    - name: Push to ECR
      run: |
        aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account>.dkr.ecr.us-east-1.amazonaws.com
        docker push comicforge/api:${{ github.sha }}
        docker push comicforge/api:latest

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure kubectl
      uses: azure/k8s-set-context@v3
      with:
        kubeconfig: ${{ secrets.KUBE_CONFIG }}
    
    - name: Deploy to Kubernetes
      run: |
        kubectl set image deployment/comicforge-api api=comicforge/api:${{ github.sha }}
        kubectl rollout status deployment/comicforge-api
```

---

## Security Architecture

### Authentication Flow

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│   API    │────▶│  Auth    │────▶│  User    │
│          │     │ Gateway  │     │ Service  │     │  DB      │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
     │                │                │                │
     │  1. Login      │                │                │
     │───────────────▶│                │                │
     │                │  2. Validate   │                │
     │                │───────────────▶│                │
     │                │                │  3. Query      │
     │                │                │───────────────▶│
     │                │                │  4. User data  │
     │                │                │◀───────────────│
     │                │  5. Generate   │                │
     │                │     JWT        │                │
     │  6. JWT +      │◀───────────────│                │
     │     Refresh    │                │                │
     │◀───────────────│                │                │
     │                │                │                │
     │  7. Request with JWT            │                │
     │───────────────▶│                │                │
     │                │  8. Verify JWT │                │
     │                │───────────────▶│                │
     │  9. Response   │◀───────────────│                │
     │◀───────────────│                │                │
```

### Rate Limiting

```python
from fastapi_limiter import FastAPILimiter
from fastapi_limiter.depends import RateLimiter

@app.post("/api/v1/characters/generate", 
          dependencies=[Depends(RateLimiter(times=10, seconds=60))])
async def generate_character(request: CharacterGenerationRequest):
    """Limit to 10 generations per minute per user"""
    pass

@app.post("/api/v1/story/generate",
          dependencies=[Depends(RateLimiter(times=5, seconds=60))])
async def generate_story(request: StoryGenerationRequest):
    """Limit to 5 story generations per minute per user"""
    pass
```

### Data Encryption

```python
from cryptography.fernet import Fernet

class EncryptionService:
    def __init__(self):
        self.key = os.environ['ENCRYPTION_KEY']
        self.cipher = Fernet(self.key)
    
    def encrypt(self, data: str) -> str:
        """Encrypt sensitive data"""
        return self.cipher.encrypt(data.encode()).decode()
    
    def decrypt(self, encrypted_data: str) -> str:
        """Decrypt sensitive data"""
        return self.cipher.decrypt(encrypted_data.encode()).decode()
    
    # Encrypt at rest
    @staticmethod
    def encrypt_database_fields():
        """
        Fields encrypted in database:
        - User passwords (bcrypt)
        - API keys
        - Payment tokens (handled by Stripe)
        - Private project data (optional)
        """
        pass
```

---

## Monitoring & Observability

### Metrics Collection

```python
from prometheus_client import Counter, Histogram, Gauge

# Request metrics
REQUEST_COUNT = Counter(
    'http_requests_total',
    'Total HTTP requests',
    ['method', 'endpoint', 'status']
)

REQUEST_LATENCY = Histogram(
    'http_request_duration_seconds',
    'HTTP request latency',
    ['endpoint']
)

# Business metrics
CHARACTERS_GENERATED = Counter(
    'characters_generated_total',
    'Total characters generated',
    ['tier']
)

PAGES_CREATED = Counter(
    'pages_created_total',
    'Total pages created',
    ['project_type']
)

ACTIVE_USERS = Gauge(
    'active_users',
    'Currently active users'
)

# AI metrics
AI_GENERATION_LATENCY = Histogram(
    'ai_generation_duration_seconds',
    'AI generation latency',
    ['model_type']
)

AI_ERROR_RATE = Counter(
    'ai_generation_errors_total',
    'AI generation errors',
    ['model_type', 'error_type']
)
```

### Alerting Rules

```yaml
# prometheus-alerts.yml
groups:
- name: comicforge
  rules:
  - alert: HighErrorRate
    expr: sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) > 0.05
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: High error rate detected
      description: Error rate is {{ $value | humanizePercentage }}
  
  - alert: HighAILatency
    expr: histogram_quantile(0.95, rate(ai_generation_duration_seconds_bucket[5m])) > 30
    for: 10m
    labels:
      severity: warning
    annotations:
      summary: AI generation latency high
      description: P95 latency is {{ $value }}s
  
  - alert: LowStorageQuota
    expr: sum(user_storage_used) / sum(user_storage_limit) > 0.8
    for: 1h
    labels:
      severity: warning
    annotations:
      summary: Storage capacity running low
```

---

## API Documentation

See separate API specification document for complete endpoint documentation.

---

*Document Version: 1.0*  
*Created: March 2026*  
*Status: Technical Architecture Complete*
