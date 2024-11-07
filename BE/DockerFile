# Tahap 1: Build Backend untuk Development
FROM node:18

# Copy file konfigurasi dan install dependensi
RUN mkdir /app
WORKDIR /app
COPY app/package*.json /app
RUN apt update -y && apt install nano -y
RUN npm install

# Install MySQL client
RUN apt-get update && apt-get install -y default-mysql-client

COPY app/ /app

# Expose port untuk backend (default 3000)
# EXPOSE 3000

# Jalankan backend dalam mode development
CMD ["npm", "run", "dev"]