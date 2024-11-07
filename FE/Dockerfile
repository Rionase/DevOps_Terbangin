# Tahap 2: Build Frontend untuk Development
FROM node:18

# Set working directory untuk frontend
RUN mkdir /app
WORKDIR /app
RUN apt update -y && apt install nano -y
# Copy file konfigurasi dan install dependensi
COPY app/package*.json /app
RUN npm install
COPY app/ /app

# Expose port untuk frontend (Vite default port)
#EXPOSE 5173

# Jalankan frontend dalam mode development
CMD ["npm", "run", "dev"]