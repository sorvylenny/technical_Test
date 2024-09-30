


- **`backend/`**: En esta carpeta contiene todo el código del backend, desarrollado en Node.js. Aquí es donde sucede toda la lógica de la aplicación y se gestionan los datos, encargado de procesar y responder a las solicitudes que llegan desde el frontend.

- **`frontend/`**: En esta carpeta se encuentra el código del frontend, desarrollado con Angular. Es responsable de mostrar la interfaz a los usuarios y con la que interactúan. Básicamente, la aplicación es fácil de usar.
  
- **`docker-compose.yml`**: Este archivo es como un manual de instrucciones para Docker. Describe cómo se deben construir y ejecutar tanto el frontend como el backend. Con solo unos pocos comandos, Docker se encargará de configurar y poner en marcha todo el proyecto de forma automática.

## Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalados:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuración del Proyecto

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/sorvylenny/Task-TestApp

2. **Navega al directorio del proyecto**:
   ```
   cd Task-TestApp

3. **Levantar el proyecto Dockerizado**:
- abrir la aplicacion de docker 
- armar al Build (Contenedor)
``` 
docker-compose build
```
- iniciar la aplicacion 
``` 
docker-compose up -d o  docker-compose up
```
- en el navegador ir a la direccion  http://localhost:4200/
- para verlo desde el celular o dispositivo movil ir a "[ip de tu computador]:4200", considerando que esten bajo la misma red



### Consideraciones:

1. **Acceso desde el Celular**: Si planeas acceder a la aplicación desde un dispositivo móvil, asegúrate de que tu dispositivo esté en la misma red local que tu computadora. Puedes usar la dirección IP local de tu computadora en lugar de `localhost`.