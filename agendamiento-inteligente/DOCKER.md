# 🐳 Docker Setup

Este documento describe cómo ejecutar el proyecto usando Docker y Docker Compose.

## 📋 Prerrequisitos

- Docker Desktop instalado
- Docker Compose instalado
- Al menos 4GB de RAM disponible

## 🚀 Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd agendamiento-inteligente
```

### 2. Ejecutar con Docker Compose
```bash
# Construir e iniciar todos los servicios
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build
```

### 3. Acceder a las aplicaciones
- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3000
- **Swagger Docs**: http://localhost:3000/api
- **Database**: localhost:5432

## 🏗️ Estructura de Servicios

### Backend Service
- **Puerto**: 3000
- **Framework**: NestJS
- **Base de datos**: PostgreSQL
- **Variables de entorno**: Configuradas en docker-compose.yml

### Frontend Service
- **Puerto**: 3001
- **Framework**: React + Vite
- **Proxy**: Configurado para conectar con backend
- **Hot reload**: Habilitado para desarrollo

### Database Service
- **Puerto**: 5432
- **Base de datos**: PostgreSQL 15
- **Usuario**: postgres
- **Contraseña**: postgres
- **Database**: agendamiento

## 🔧 Comandos Útiles

### Gestión de Servicios
```bash
# Iniciar servicios
docker-compose up

# Iniciar en segundo plano
docker-compose up -d

# Detener servicios
docker-compose down

# Reconstruir servicios
docker-compose up --build

# Ver logs
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f db
```

### Gestión de Base de Datos
```bash
# Conectar a la base de datos
docker-compose exec db psql -U postgres -d agendamiento

# Crear backup
docker-compose exec db pg_dump -U postgres agendamiento > backup.sql

# Restaurar backup
docker-compose exec -T db psql -U postgres -d agendamiento < backup.sql
```

### Desarrollo
```bash
# Ejecutar solo el backend
docker-compose up backend

# Ejecutar solo el frontend
docker-compose up frontend

# Ejecutar solo la base de datos
docker-compose up db
```

## 🔍 Troubleshooting

### Problemas Comunes

1. **Puerto ya en uso**
   ```bash
   # Verificar puertos en uso
   netstat -tulpn | grep :3000
   netstat -tulpn | grep :3001
   netstat -tulpn | grep :5432
   ```

2. **Permisos de Docker**
   ```bash
   # En Linux, agregar usuario al grupo docker
   sudo usermod -aG docker $USER
   ```

3. **Limpiar recursos Docker**
   ```bash
   # Limpiar contenedores no utilizados
   docker system prune -a

   # Limpiar volúmenes
   docker volume prune
   ```

### Logs y Debugging
```bash
# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend

# Entrar al contenedor
docker-compose exec backend sh
docker-compose exec frontend sh
docker-compose exec db psql -U postgres
```

## 📊 Monitoreo

### Health Checks
- **Backend**: http://localhost:3000/health
- **Frontend**: http://localhost:3001
- **Database**: Automático en docker-compose

### Métricas
```bash
# Ver uso de recursos
docker stats

# Ver información de contenedores
docker-compose ps
```

## 🔐 Variables de Entorno

### Backend
- `NODE_ENV`: development
- `DB_HOST`: db
- `DB_PORT`: 5432
- `DB_USERNAME`: postgres
- `DB_PASSWORD`: postgres
- `DB_DATABASE`: agendamiento
- `JWT_SECRET`: your-super-secret-jwt-key
- `JWT_EXPIRES_IN`: 24h

### Frontend
- `NODE_ENV`: development
- `VITE_API_URL`: http://localhost:3000

## 🎯 Próximos Pasos

1. **Configurar variables de entorno** para producción
2. **Implementar CI/CD** con Docker
3. **Configurar monitoreo** y logging
4. **Optimizar imágenes** para producción

## 📞 Soporte

Para problemas específicos de Docker, revisa:
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [NestJS Docker Guide](https://docs.nestjs.com/deployment)
- [Vite Docker Guide](https://vitejs.dev/guide/) 