# Use an official Node.js image as a parent image
FROM node:18 as builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install --verbose

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build:storybook

# Use a smaller image for the production environment
FROM nginx:alpine as webapp

# Copy the build output from the builder stage to the nginx web root
COPY --from=builder /app/storybook-static /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# The default command is to start nginx
CMD ["nginx", "-g", "daemon off;"]
