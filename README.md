# FrontEndTest


##__Las siguientes son las condiciones para realizar la prueba:

1. Tener cuenta en Github (gratis)

2. Clonar el siguiente repositorio: HTTPS: https://github.com/LotoPuntoProject/FrontEndTest.git SSH:git@github.com:LotoPuntoProject/FrontEndTest.git

3. Crear branch donde será subido todo el código desarrollado. El nombre del branch será: {$nombre}_lotopunto ($nombre = PrimernombrePrimerapellido, ej: CarlosRuiz_lotopunto)

4. Subir todo el codigo necesario para la compilacion correcta del aplicativo, asi como sus requerimientos y un README describiendo el orden de ejecucion.

5. El tiempo límite para subir el código funcional será de 24 horas a partir de la recepción del email con la prueba.

6. Adicionalmente a los requerimientos funcionales, se tendrá en cuenta: la presentación física del aplicativo (Estética, HTML, CSS), usabilidad y legibilidad en inglés (comentarios, indentación y organización) del código fuente, así como su robustez.

7. En el momento de evaluar se tendrá en cuenta el último “push” previo a concluir el plazo para subir el código.

8. Cualquier pregunta sobre esta prueba será dirigida y respondida vía email a raosoriom.lotopunto@gmail.com, en horario de 17 de Abril 5:00 PM a 11:00 PM y 18 de Abril 9:00 AM a 2:00 PM.

9. Sólamente se revisará el desarrollo que se encuentre en el branch respectivo y antes que concluya el tiempo. No olvidar hacer push.

10. Generar “Class Diagram” del código fuente y “Use Case Diagram” en versión UML 2.0 en idioma inglés (formato PDF). Subirlos [aqui:](https://docs.google.com/forms/d/1FAhqnX6IQ5Wgirs_he8SHZ5ux4ZBtUFNi9vPkITnLls/)


##__Requerimientos Funcionales FrontEnd__

Desarrollo de una aplicación web FrontEnd.

El desarrollador podrá usar cualquier framework para el desarrollo (React, Angular, Redux...).

El desarrollo estará basado en API_REST.

Será un desarrollo local en el puerto 3000 localhost:3000

Se crearán 3 vistas explicadas a continuación:

1) La primera será una vista de bienvenida (Sentirse libre y creativo a la hora de hacerla). Al usuario final se desplegará un cuadro de login con dos campos: usuario y contraseña. El cuadro de login tendrá dos botones:

Sign up (click)-> llevará a la 2) vista

Login (click)-> Validación de usuario y contraseña haciendo POST a localhost:3001/login y en el body la siguiente información: { "user": $user, "password": $password } Respuesta: 200 ok: Redirige a la vista 3)

En caso de credenciales no válidas (equivalente a respuesta “404 not found”), se mostrará en pantalla un mensaje de usuario y/o contraseña incorrecta. El usuario podrá volver a intentar hacer Login.

2) Una vista de registro donde se solicitará al usuario user, password y email. Esta vista tendrá un botón: Sign Up (click)-> Este botón recolecta la información solicitada y realiza post a localhost:3001/signup

En el body ira la información recolectada en formato JSON. Respuesta: 200 ok: sign up exitoso y redirige a la vista 1) 400 bad Request: Error

3) Una vista de login exitoso. Esta vista mostrará un mensaje en pantalla de login ejecutado correctamente, con la información recolectada al hacer un GET a localhost:3001/$user/info

La información recolectada al hacer el GET debe ser mostrada en pantalla en esta vista y vendrá en formato JSON: { "user": string, "cash": int, "meta": list }
