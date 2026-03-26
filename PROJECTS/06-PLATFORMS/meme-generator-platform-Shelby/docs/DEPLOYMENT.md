# MemeGenerator Deployment Guide

## Quick Start (Development)

### 1. Clone & Setup

```bash
# Clone repository
git clone https://github.com/yourusername/meme-generator-platform.git
cd meme-generator-platform

# Setup backend
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials

# Setup frontend
cd ../frontend
npm install
cp .env.example .env.local
# Edit .env.local
```

### 2. Start Services

```bash
# Terminal 1: MongoDB (if local)
mongod

# Terminal 2: Redis (if local)
redis-server

# Terminal 3: Backend
cd backend
npm run dev
# Server runs on http://localhost:5000

# Terminal 4: Frontend
cd frontend
npm run dev
# App runs on http://localhost:3000
```

### 3. Seed Templates

```bash
cd backend
npm run seed
# Creates 500+ meme templates
```

---

## Production Deployment

### Option 1: Vercel + Railway (Recommended)

#### Backend (Railway)

1. **Create Railway Account**
   - Go to railway.app
   - Sign up with GitHub

2. **Deploy Backend**
   ```bash
   # Install Railway CLI
   npm i -g @railway/cli
   
   # Login
   railway login
   
   # Deploy
   cd backend
   railway init
   railway up
   ```

3. **Add Environment Variables**
   - Go to Railway dashboard
   - Add all variables from `.env.example`
   - Set `NODE_ENV=production`

4. **Add MongoDB**
   - Railway → New → Database → MongoDB
   - Copy connection string to `MONGODB_URI`

5. **Add Redis**
   - Railway → New → Database → Redis
   - Copy connection string to `REDIS_URL`

#### Frontend (Vercel)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/meme-generator.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com
   - Import GitHub repository
   - Set root directory to `frontend`
   - Add environment variables from `.env.example`
   - Deploy

3. **Update Backend URL**
   - In Vercel dashboard, set `API_URL` to Railway backend URL
   - Redeploy

---

### Option 2: AWS Deployment

#### EC2 Setup

```bash
# Launch Ubuntu 22.04 EC2 instance
# Connect via SSH

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

# Install Redis
sudo apt install -y redis-server
sudo systemctl start redis
sudo systemctl enable redis

# Install PM2
sudo npm install -g pm2

# Clone repository
cd /var/www
git clone https://github.com/yourusername/meme-generator.git
cd meme-generator

# Setup backend
cd backend
npm install
cp .env.example .env
# Edit .env

# Build frontend
cd ../frontend
npm install
npm run build

# Start with PM2
cd ../backend
pm2 start npm --name "meme-api" -- start
pm2 save
pm2 startup

# Setup Nginx
sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/meme-generator
```

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files
    location /output {
        alias /var/www/meme-generator/backend/output;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/meme-generator /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Setup SSL (Let's Encrypt)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Option 3: Docker Deployment

#### Dockerfile (Backend)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

#### Dockerfile (Frontend)

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:6
    volumes:
      - mongodb_data:/data/db
    ports:
      - "27017:27017"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  backend:
    build: ./backend
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/meme-generator
      - REDIS_URL=redis://redis:6379
      - NODE_ENV=production
    ports:
      - "5000:5000"
    depends_on:
      - mongodb
      - redis

  frontend:
    build: ./frontend
    environment:
      - API_URL=http://backend:5000/api
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  mongodb_data:
```

```bash
# Build and run
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

---

## Database Setup (MongoDB Atlas)

1. **Create Account**
   - Go to mongodb.com/cloud/atlas
   - Sign up for free tier

2. **Create Cluster**
   - Choose free tier (M0)
   - Select region closest to you
   - Create cluster

3. **Configure Access**
   - Database Access → Add User
   - Network Access → Add IP (0.0.0.0/0 for all IPs)

4. **Get Connection String**
   - Clusters → Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your password

5. **Add to Environment**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/meme-generator
   ```

---

## Redis Setup (Redis Cloud)

1. **Create Account**
   - Go to redis.com/try-free
   - Sign up for free tier

2. **Create Database**
   - Create free database (30MB)
   - Copy connection URL

3. **Add to Environment**
   ```
   REDIS_URL=redis://user:password@host:port
   ```

---

## Stripe Setup

1. **Create Account**
   - Go to stripe.com
   - Sign up for test mode

2. **Get API Keys**
   - Developers → API keys
   - Copy publishable and secret keys

3. **Create Products**
   ```bash
   # Or use Stripe Dashboard
   # Products → Add product
   # Name: Pro Plan, Price: $9.99/month
   # Name: API Plan, Price: $99/month
   ```

4. **Setup Webhooks**
   - Developers → Webhooks → Add endpoint
   - URL: `https://your-domain.com/api/payments/webhook`
   - Events: `checkout.session.completed`, `customer.subscription.*`
   - Copy webhook secret

---

## OpenAI Setup

1. **Create Account**
   - Go to platform.openai.com
   - Sign up and verify

2. **Get API Key**
   - API keys → Create new secret key
   - Copy key (only shown once!)

3. **Add Credits**
   - Billing → Add payment method
   - Add $10-50 to start

4. **Add to Environment**
   ```
   OPENAI_API_KEY=sk-...
   ```

---

## Monitoring & Logging

### Sentry (Error Tracking)

```bash
# Install
npm install @sentry/node @sentry/react

# Setup in backend/src/server.js
const Sentry = require('@sentry/node');
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});
```

### LogRocket (Session Replay)

```bash
# Install in frontend
npm install logrocket

# Setup in frontend/src/app/layout.js
import LogRocket from 'logrocket';
LogRocket.init('your-app-id');
```

---

## Performance Optimization

### Backend

1. **Enable Compression**
   ```javascript
   const compression = require('compression');
   app.use(compression());
   ```

2. **Redis Caching**
   ```javascript
   // Cache trends for 5 minutes
   await redis.setEx('trends:all', 300, JSON.stringify(trends));
   ```

3. **Database Indexing**
   ```javascript
   templateSchema.index({ category: 1, isTrending: -1 });
   memeSchema.index({ user: 1, createdAt: -1 });
   ```

### Frontend

1. **Image Optimization**
   ```javascript
   <Image src={src} alt={alt} width={500} height={500} />
   ```

2. **Lazy Loading**
   ```javascript
   const MemeCard = dynamic(() => import('@/components/MemeCard'));
   ```

3. **Code Splitting**
   - Next.js does this automatically
   - Use dynamic imports for heavy components

---

## Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secured
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] Input validation on all endpoints
- [ ] JWT expiration set (7 days)
- [ ] File upload size limits
- [ ] MongoDB authentication enabled
- [ ] Regular security updates
- [ ] Backup strategy in place

---

## Backup Strategy

### Automated Backups

```bash
# MongoDB backup script
#!/bin/bash
DATE=$(date +%Y-%m-%d_%H-%M-%S)
mongodump --uri="$MONGODB_URI" --out="/backups/mongodb_$DATE"
aws s3 cp /backups/mongodb_$DATE s3://your-bucket/backups/
```

### Cron Job (Daily Backup)

```bash
# crontab -e
0 2 * * * /path/to/backup-script.sh
```

---

## Troubleshooting

### Backend Won't Start

```bash
# Check logs
pm2 logs meme-api

# Check MongoDB connection
mongo --eval "db.runCommand({ connectionStatus: 1 })"

# Check Redis connection
redis-cli ping
```

### Frontend Build Fails

```bash
# Clear cache
rm -rf .next
npm run build

# Check Node version
node -v  # Should be 18+
```

### High Memory Usage

```bash
# Monitor with PM2
pm2 monit

# Increase MongoDB memory if needed
# Edit /etc/mongod.conf
```

---

## Support

- **Documentation:** https://docs.memegenerator.com
- **Discord:** [Join server]
- **GitHub Issues:** [Report bug]
- **Email:** support@memegenerator.com

---

**Happy Deploying! 🚀**
