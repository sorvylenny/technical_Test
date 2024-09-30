# Task-TestApp - Aplicación Web

una aplicación web en Angular 16 que permita gestionar tareas y personas, asociadas a ellas. La aplicación debe contar con las siguientes:  

## Funcionalidades

1. Crear tareas.
2. Listar tareas creadas.
3. Marcar tareas como completadas.
4. Filtrar tareas por estado (completadas o pendientes).
5. Asignar personas a cada tarea, con sus nombres completos, edades y habilidades.
6. Añadir y eliminar personas de las tareas utilizando botones para estas acciones.
7. Añadir y eliminar habilidades para cada persona utilizando botones para estas acciones.
8. Implementar un formulario reactivo con validaciones, incluyendo la validación de
arreglos y arreglos anidados.
Las personas asociadas a una tarea deben tener los siguientes atributos:
• Nombre completo (obligatorio, mínimo 5 caracteres, no puede repetirse entre las
personas de la misma tarea).
• Edad (obligatorio, mayor de 18 años).
• Habilidades (lista de habilidades asociadas a la persona, debe tener al menos una
habilidad).
Se deben utilizar arreglos de objetos para almacenar y gestionar las personas asociadas a las tareas,
así como un arreglo anidado para gestionar las habilidades de cada persona.

## Tecnologías y Dependencias

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.11, aprovechando las últimas características de Angular para desarrollo de aplicaciones web modernas.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- [Angular: Plataforma para construir aplicaciones web escalables y dinámicas.](https://angular.io/)
  - [@angular/animations](https://angular.io/api/animations) (^16.2.0)
  - [@angular/common](https://angular.io/api/common) (^16.2.0)
  - [@angular/compiler](https://angular.io/api/compiler) (^16.2.0)
  - [@angular/core](https://angular.io/api/core) (^16.2.0)
  - [@angular/forms](https://angular.io/api/forms) (^16.2.0)
  - [@angular/platform-browser](https://angular.io/api/platform-browser) (^16.2.0)
  - [@angular/platform-browser-dynamic](https://angular.io/api/platform-browser-dynamic) (^16.2.0)
  - [@angular/router](https://angular.io/api/router) (^16.2.0)
  - [RxJS](https://rxjs.dev/) para programación reactiva (~7.8.0)
  - [TypeScript](https://www.typescriptlang.org/) (^5.1.3)

### Herramientas de Desarrollo

- `@angular/cli`: Herramienta de línea de comandos de Angular para desarrollo.
- `@angular-devkit/build-angular`: Herramientas de construcción de Angular CLI.
- Herramientas de testing como `jasmine`, `karma`, para asegurar la calidad del código.

## Cómo Empezar

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Angular CLI](https://github.com/angular/angular-cli).
2. Clona este repositorio en tu máquina local: (`https://github.com/sorvylenny/technical_Test`)
3. Navega a la carpeta del proyecto y ejecuta `npm install` para instalar las dependencias.
4. Una vez completada la instalación, ejecuta `ng serve` para iniciar el servidor de desarrollo.
5. Abre tu navegador y visita `http://localhost:4200/` para ver la aplicación

## Compilación y Despliegue

- Ejecuta `ng build` para compilar el proyecto. El resultado se almacenará en el directorio `dist/`. Usa la bandera `--prod` para una compilación de producción.

## Autor

Desarrollado por Katherine Flores. Para más información o sugerencias, puedes contactarme en <floresmKatherine@gmail.com>
