# Ejecucion del proyecto

Ejecutar comando "npm i" para instalar las dependecias. Despues ejecutar comando "npm run dev" para iniciar la api

***

# Idea del funcionamiento de la api
La api se pensó, para que tenga una petición post con el envió de una url larga, el sistema recibe esta url y genera un url corta con un numero aleatorio y un id en que va aumentando de acuerdo a la creación de urls cortas.

Si se le peticiona la url corta, este re direcciona al usuario a la página original, y si peticiona la url larga el sistema le devuelve la url corta.

La api guarda la fecha de creación, y cada que se solicita una url verifica si pasaron 6 meses, eso significa que la url expiro. La api envía un mensaje para que el usuario sepa de la situación

***

# Funcionamiento

### Envio de post con url larga, para crear url corta
![imagen_post](https://github.com/salvipablo/ShipNow/blob/main/ejercicio_4/capturas_readme/post.png)

### Envio de url larga, para que la api devuelva la url corta
![imagen_post](https://github.com/salvipablo/ShipNow/blob/main/ejercicio_4/capturas_readme/envio_url_larga.png)

### Envio de url corta, para que la api redireccione al usuario
![imagen_post](https://github.com/salvipablo/ShipNow/blob/main/ejercicio_4/capturas_readme/Envio_url_corta.png)

### Envio de url corta, cuando la url esta expirada
![imagen_post](https://github.com/salvipablo/ShipNow/blob/main/ejercicio_4/capturas_readme/envio_url_corta_expired.png)
