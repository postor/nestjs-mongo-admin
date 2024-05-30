# Stage 1: Build the frontend
FROM node:18-alpine AS build-frontend

# Set working directory
WORKDIR /app/frontend

# Install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the frontend files
COPY frontend/ ./

# Build the frontend
RUN npm run build

# Stage 2: Build the backend
FROM node:18-alpine AS build-backend

# Set working directory
WORKDIR /app/backend

# Install dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copy the rest of the backend files
COPY backend/ ./

# Copy the built frontend files to the backend's public directory
COPY --from=build-frontend /app/frontend/dist ./public

# Build the backend
RUN npm run build

# Stage 3: Run the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built backend files
COPY --from=build-backend /app/backend/dist ./dist
COPY --from=build-backend /app/backend/node_modules ./node_modules
COPY --from=build-backend /app/backend/package.json ./
COPY --from=build-backend /app/backend/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "dist/main"]
