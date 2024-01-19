# Start with the official Node.js base image
FROM node:20
# Set the working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# Install dependencies
RUN npm install
# Bundle app source
COPY . .
# Build the application
RUN npm run build
# Expose the port the app runs on
EXPOSE 3000
# Command to run the application
CMD ["npm", "run", "start:prod"]