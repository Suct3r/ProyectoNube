# Usa una imagen base de Node.js
FROM node:18

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY client/package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente al contenedor
COPY client/ ./

# Ejecuta el build de la aplicación
RUN npm run build

# Exponer el puerto para servir la aplicación
EXPOSE 4173

# Comando para correr la aplicación
CMD ["npm", "run", "preview"]



