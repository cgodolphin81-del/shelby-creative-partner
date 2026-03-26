#!/bin/bash

# MemeGenerator Platform - Quick Start Script
# This script sets up and runs the platform locally

set -e

echo "🎭 MemeGenerator Platform - Quick Start"
echo "========================================"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Check for MongoDB
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB not found. Please ensure MongoDB is running."
    echo "   Install: https://www.mongodb.com/docs/manual/installation/"
fi

# Check for Redis
if ! command -v redis-server &> /dev/null; then
    echo "⚠️  Redis not found. Please ensure Redis is running."
    echo "   Install: https://redis.io/download"
fi

echo ""
echo "📦 Installing Dependencies..."
echo ""

# Backend
echo "Installing backend dependencies..."
cd backend
npm install --silent
cd ..

# Frontend
echo "Installing frontend dependencies..."
cd frontend
npm install --silent
cd ..

echo ""
echo "✅ Dependencies installed"
echo ""

# Create .env files if they don't exist
if [ ! -f backend/.env ]; then
    echo "📝 Creating backend .env file..."
    cp backend/.env.example backend/.env
    echo "⚠️  Please edit backend/.env with your API keys"
fi

if [ ! -f frontend/.env.local ]; then
    echo "📝 Creating frontend .env.local file..."
    cp frontend/.env.example frontend/.env.local
fi

echo ""
echo "🌱 Seeding Database (500+ templates)..."
cd backend
npm run seed
cd ..

echo ""
echo "🚀 Starting Services..."
echo ""
echo "Backend:  http://localhost:5000"
echo "Frontend: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""

# Start backend in background
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Start frontend
cd frontend
npm run dev

# Cleanup on exit
trap "kill $BACKEND_PID 2>/dev/null" EXIT
