# Paso 1: Construir la app de Vue.js
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Paso 2: Servir la app usando nginx
FROM nginx:alpine

# Copiar los archivos construidos al contenedor de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80 (el puerto por defecto de nginx)
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]