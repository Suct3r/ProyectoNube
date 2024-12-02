# Dockerfile del backend (server/Dockerfile)
FROM node:18

WORKDIR /app

# Copiar el package.json y package-lock.json desde el directorio raíz (ProyectoNube)
COPY ./package*.json ./ 
 # Copia desde el directorio raíz del contexto

# Instalar las dependencias
RUN npm install

# Copiar todo el código del backend
COPY server/ ./  
# Copiar todo el código del backend

EXPOSE 4000

CMD ["npm", "start"]

