# # Use nginx web server
# FROM nginx:alpine

# # Copy website files to nginx folder
# COPY . /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80
# # Use nginx web server
# FROM nginx:alpine

# # Copy website files to nginx folder
# COPY . /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80


# ---------- Build stage ----------
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---------- Production stage ----------
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
