# Use an official Node.js runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY uod-library-occupancy-angular-app/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY uod-library-occupancy-angular-app/ ./

# Build the Angular app
RUN npm run build --prod

# Use an official NGINX image as the web server
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080 for Google Cloud Run
EXPOSE 8080

# Start the nginx web server when the container starts
CMD ["nginx", "-g", "daemon off;"]