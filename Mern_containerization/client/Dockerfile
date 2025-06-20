# Step 1: Build the React app
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Step 2: Serve it using NGINX
FROM nginx:stable-alpine

# Copy build files to NGINX web directory
COPY --from=builder /app/build /usr/share/nginx/html

# Remove default config and use custom config if needed
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
