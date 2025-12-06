# Tienda de ropas (Backend)

## Tecnologías

- **Node.js** con **NestJS**
- **MySQL** - Base de datos
- **JWT** - Autenticación y autorización
- **Dotenv** - Variables de entorno
- **CORS** - Configuración de seguridad
- **Gmail API** - Autenticación de usuarios

## Instalación

### 1. Clonar el repositorio

git clone https://github.com/DaybitSemVoid247/ropas_backend.git

### 2. Navegar al directorio del proyecto

cd ropas_backend

### 3. Instalar pnpm (si no lo tienes)

npm install -g pnpm

### 4. Instalar dependencias

pnpm install

## Configuración

### 1. Crear la base de datos

Abre tu cliente MySQL y ejecuta:

CREATE DATABASE ropas_db;
USE ropas_db;

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

cp .env.example .env

Edita el archivo `.env` con tus credenciales:

# Base de datos

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=contrasena_base_datos
DB_NAME=nombre_base_datos
DB_SYNC=true
DB_LOGGING=true

#Verificacion por correo

EMAIL_USUARIO= correo_electronico
EMAIL_PASSWORD=contraseña_correo
SERVICIO=gmail

## Ejecución

### Iniciar el servidor en modo desarrollo con las seeds

pnpm run start

El servidor estará disponible en: `http://localhost:3000`
