# Back-task

## Descripción

Este es el backend de una aplicación para gestionar tareas y personas asociadas a ellas

## Instalación

Antes de comenzar, asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

1. Clona este repositorio:

   ```bash
   git clone https://github.com/sorvylenny/Task-TestApp

2. Navega al directorio del proyecto
   ```
   cd Task-TestApp
3. Instala las dependencias:
   ```
   npm install
4. Configuración

Asegúrate de configurar las variables de entorno antes de ejecutar la aplicación. Crea un archivo .env en el directorio raíz y proporciona los siguientes valores:

- MONGODB_URI=your_mongodb_uri
- SECRET_KEY=your_secret_key

5. Modo de Desarrollo (con Nodemon)
   ```
   npm run dev

## Dependencias

- [dotenv](https://www.npmjs.com/package/dotenv) v16.3.1
- [express](https://www.npmjs.com/package/express) v4.18.2
- [mongoose](https://www.npmjs.com/package/mongoose) v8.0.1


## Licencia

Este proyecto está bajo la licencia [ISC](LICENSE)

## Autor

Desarrollado por Katherine Flores. Para más información o sugerencias, puedes contactarme en <floresmKatherine@gmail.com>