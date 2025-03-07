# Proyecto Inventario Backend

## Resumen de Ejecución

Para iniciar el proyecto, siga los siguientes pasos a continuación:

### 1. Configurar la Base de Datos
Cree una base de datos llamada **Inventory**.

### 2. Configure las Variables de Entorno
En la raíz del proyecto, cree un archivo `.env` con las siguientes variables:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=Inventory
API_SERVER=localhost
API_PORT=3000
```

### 3. Instalar Dependencias
En el directorio principal del proyecto, ejecute:

`cd backend
npm install`

### 4. Ejecutar el Proyecto
Inicie el backend:

`cd backend
npm run dev`

### 5. Ejecute la Semilla para Insertar los Datos en las Tablas
Para insertar datos iniciales en las tablas, ejecute:

`npm run seed`

## BackEnd - API de Inventario
Descripción del Proyecto
Este proyecto tiene como objetivo calcular los niveles de inventario de artículos en un almacén, considerando diferentes estados del stock y las órdenes. El inventario incluye artículos con cantidades disponibles, bloqueadas y la cantidad total disponible para cumplir con las órdenes.

Entradas:
Stock: Representa la cantidad total de artículos en el almacén. Cada artículo tiene dos cantidades:
Cantidad Contada: Total físico de piezas disponibles en el almacén.
Cantidad Bloqueada: Subconjunto de las piezas que no pueden ser utilizadas para cumplir con un pedido (por ejemplo, piezas defectuosas o vencidas).
Órdenes: Las órdenes contienen líneas de pedido con la cantidad de artículos solicitados. Cada orden tiene dos estados: cumplida o no cumplida.

Objetivo:
Calcular y reportar para cada artículo en stock los diferentes niveles de inventario:

Count: Cantidad total de piezas disponibles.
Blocked: Piezas bloqueadas que no pueden ser usadas.
Booked: Piezas reservadas para órdenes aún no cumplidas.
Missing: Piezas faltantes para completar todas las órdenes.
Available: Piezas disponibles para nuevos pedidos.

## Tecnologías Utilizadas
```
Node.js: Entorno de ejecución para JavaScript del lado del servidor.
Express: Framework web para Node.js.
TypeScript: Superset de JavaScript para desarrollo más estructurado.
TypeORM: ORM para trabajar con bases de datos relacionales en Node.js.
PostgreSQL: Base de datos relacional.
dotenv: Para gestionar las variables de entorno
```

## Estructura de Carpetas
```
src/
├── config/            # Archivos de configuración global, como base de datos, servidores, etc.
├── controllers/       # Controladores que gestionan las solicitudes HTTP y las respuestas.
├── dtos/              # Objetos que definen la estructura de los datos para transferencia (DTOs).
├── entities/          # Entidades que representan las tablas de la base de datos (con TypeORM u otro ORM).
├── middlewares/       # Funciones intermedias que gestionan solicitudes antes de llegar a los controladores.
├── repositories/      # Repositorios que interactúan con la base de datos para realizar operaciones CRUD.
├── routes/            # Rutas que definen las URL y los métodos HTTP asociados a los controladores.
├── services/          # Servicios que contienen la lógica de negocio de la aplicación.
├── utils/             # Funciones auxiliares utilizadas en diferentes partes de la aplicación.
```

## Como Iniciar el Proyecto
# 1. Clonar el repositorio
```
   git clone https://github.com/OrualAranda/inventory-base-labs.git
   cd backend
```
# 2. Instalar dependencias
Asegúrate de tener Node.js y npm instalados.
```
   npm install
```
# 3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto basado en el siguiente ejemplo:
```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=Inventory
API_SERVER=localhost
API_PORT=3000
```

# 4. Generar la base de datos
Asegúrate de tener PostgreSQL instalado y corriendo. Usa TypeORM para sincronizar las entidades:
```
npm run typeorm migration:run
```
# 5. Iniciar el servidor
```
  npm start
```
# 6. Ejecute la Semilla para Insertar los Datos en las Tablas
Para insertar datos iniciales en las tablas, ejecute:
```
npm run seed
```
El backend estará corriendo en http://localhost:3000/api

## Swagger - Documentación
La documentación de la API se genera automáticamente con Swagger. Una vez que el servidor esté corriendo, puedes acceder a la documentación en:
 ```
 http://localhost:3000/api/docs
```
Endpoints Disponibles
# 1. GET /api/inventory/inventory-levels
   Devuelve una lista con los niveles de inventario calculados

## Autor
ORUAL MAURICIO ARANDA CLAURE
