# Prueba para DevOps


### Requisitos:

- Nodejs

### Instalar dependencias

~~~
    npm install
~~~


### Ejecutar

~~~
    npm run start
~~~

### URLS

 - / path show index.html
 - /sin recibe n as query parameter
 - /cos recibe n as query parameter
 - /tan recibe n as query parameter
 - /cotan should send 500 error


 ### Ejemplo

- GET http://localhost/sin?n=20


### Escenario pruebas:

1. El boton de calcular cos no hace nada.
2. Calcular cotan deberia enviar algun mensaje de error.