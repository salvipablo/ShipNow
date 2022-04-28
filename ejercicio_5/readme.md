# Ejecucion.

### Se necesita instalar de manera global
"npm i -g live-server"

### En la carpeta del ejercicio
Ejecutar "npm i" para la instalacion de dependencias

### Para ejecutar
En una bash correr este comando "live-server", esto hara que el archivo json este para ser servido por un servidor.

En otra bash ejecutar el programa con "node index".

***

# Consideracion al diseñar el algoritmo para tomar la ruta.
Las coordenadas se colocaron en una array y se ordenaron de menor a mayor, esto para que las cervecerías estén ordenadas por cercanía y como si estuvieran en una línea recta. Las coordenadas usadas fueron la x.

La idea es, que sea cual sea la cervecería inicial elegida, el sistema muestra esa cervecería inicial, y después vuelve hacia la primera y muestra en orden a todas, ignorando la ya elegida.

El criterio que se tomo es que si se elige por ejemplo la cervecería 15, se hace el recorrido hacia la primera estando sobrio, y después se va avanzando de a poco. Es cierto que con esta estrategia en las últimas cervecerías, se estarían recorriendo bastante alcoholizado, pero contemplando que puede estar un rato descansando en cada una el viaje se realizaría de a poco y progresivamente y teniendo en claro hacia dónde ir, porque se va en orden. 
