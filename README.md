# Loto Punto Test

In order to show my skills like backend developer I perform this test with the objective of create a Rest API that can manage sessions like the assessment suggest.


to run this project you need Docker, to build the container you should run this line:

```
docker build  -t loto_demo:1 .
```

once the container was build, to run the container please rin this line:

```
docker run  -p 3000:3000 loto_demo:1 
```
once the docker container is run, please visit this endpoint:

```
http://localhost:3000/swagger/
```

in the endpoint above, you will see all the authentication required endpoints (login, logout, restart password) and the endpoints for sign up a user for the other hand, we need a super user to continue (or create user with the sign up endpoint), to do that please run this line:

```
docker exec -it $(docker ps | grep loto_demo:1 | awk '{print $1}') python /app/loto_punto/manage.py createsuperuser
```

with the command above you can create your super user, once the super user was created you can hit the 'session login' button in the url http://localhost:3000/swagger/ in order to see the another availables endpoints, where, there are a complete CRUD to manage Groups and the another endpoints for manage users (list, retrieve, delete, update).
