# Use an official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY uod-library-occupancy-angular-app/package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY uod-library-occupancy-angular-app/ ./

# Build the Angular app
RUN npx ng build --configuration production --aot --output-hashing=all

# Use an official NGINX image as the web server
FROM nginx:alpine

# Remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app to the nginx web server directory
COPY --from=build /app/dist/uod-library-occupancy-angular-app /usr/share/nginx/html

# Copy the NGINX config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# When the container starts, replace the PORT placeholder in the NGINX config with the actual value of the PORT environment variable
CMD ["sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf.temp && mv /etc/nginx/conf.d/default.conf.temp /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
