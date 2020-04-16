# FrontEndTest


A continuacion se plantean las condiciones para realizar la prueba:

1) Tener cuenta en github (gratis)

2) Clonar repositorio: HTTPS: https://github.com/LotoPuntoProject/FrontEndTest.git
SSH: git@github.com:LotoPuntoProject/FrontEndTest.git

3) Crear branch donde ira todo el codigo desarrollado, el nombre del branch sera:
 {$nombre}_lotopunto  ($nombre = Primer.nombrePrimer.apellido, ej: CarlosRuiz_lotopunto)

4) El tiempo que tendran para hacer el desarrollo sera de 12h

5) Se tendra muy en cuenta la presentacion fisica (Estetica, htlm, CSS) y funcionalidad

6) A la hora de revisar se tendra cuenta el ultimo push hecho antes de concluir con el tiempo de realizacion(12h).

7) no olvidar hacer PUSH.

8) cualquier pregunta al correo raosoriom.lotopunto@gmail.com

IMPORTANTE!!!!
Solo se revisa el desarrollo que se encuentre en el branch respectivo y antes que concluya el tiempo, no olvidar hacer push..


Desarrollo FrontEnd

Desarrollo de una aplicacion web FrontEnd, se podra usar cualquier framework para el desarrollo (react, Angular, Redux...), 
el desarrollo sera basado en API_REST, sera un desarrollo local en el puerto 3000  localhost:3000

Se crearan 3 vistas explicadas a continuacion

1) La primera sera una vista de bienvenida(Sentirse libre y creativo a la hora de hacerla) y adicional mostrar
un cuadro de login con dos labels: usuario y contrasena, y dos botones: 
Sign up (click)-> llevara a la 2) vista 
Login (click)-> validara usuario y contrasena haciendo post a localhost:3001/login y en el body la siguiente informacion: 
{
    "user": $user,
    "password": $password
}
Respuesta:
200 ok: llevar a la vista 3)
404 not found: Mostrar mensaje de usurio y contrasena erronea

2) Sera una vista de registro donde se solicitara cierta informacion(user, password, mail) al usuario y tendra un boton:
Sign Up (click)-> Este boton recolecta la informacion solicitada y realiza post a localhost:3001/signup y en el body ira 
la informacion recolectada en formato json.
Respuesta:
200 ok: sign up exitoso y redirige  la vista 1)
400 bad Request: Error 

3) Esta vista mostrata un mensaje de login correcto y mostrara una informacion recolectada al hacer un get a localhost:3001/$user/info
la informacion recolectada al hacer el get debe ser expuesta en esta vista y vendra en formato json:
{
    "user": string,
    "cash": int,
    "meta": list
}

