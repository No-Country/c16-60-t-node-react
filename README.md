# App de donaciones para catástrofes

## Documentación

- Clona el repositorio de GitHub utilizando el comando `git clone --URL`
- Instala los paquetes de Node con el comando `npm install`
- Ejecuta el comando `npm start`

## Modelos de Entidad Relacional

<strong>Diagrama de Entidad Relacional</strong>
<img src="./public/2024-02-12 17 20 39.png"/>

<i>Diagrama de entidad relacional del usuario</i>
<br/>

<p>flujo de datos para realizar el correspondiente donativo.</p>

## Imagen de Docker para la BDD PostgreSQL

- Instalar Docker, en widows y mac, por defecto viene instalado Docker compose
- Agregar un archivo .env en la raiz del proyecto
- Agregar las siguientes variables de entorno:
    -`POSTGRES_DB=smarthelp_bd
      POSTGRES_USER=smart_help
      POSTGRES_PASSWORD=password123`
- Ejecuta el comando `docker-compose up`, y se inicializara una imagen de postgres con la BDD ya creada.

