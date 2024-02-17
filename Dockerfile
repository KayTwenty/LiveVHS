# Use certain Node.js image as base
FROM node:18.17.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining applications files
COPY . .

# Copy .env.example and rename to .env
COPY .env.example .env

# Expose port
EXPOSE 4000

# Command to run the application
CMD ["npm", "start"]