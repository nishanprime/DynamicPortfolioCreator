# Specify the base image
FROM node:14

# Create a work directory
WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies for the main project
RUN npm install

# Copy package.json from frontend and install dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy package.json from backend and install dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Install ts-node globally
RUN npm install -g ts-node

# Copy everything to /app
COPY . .

# Start the server
CMD ["npm", "run", "dev"]
