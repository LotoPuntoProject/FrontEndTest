#!/bin/sh
echo "Inicializando APP"

python3 /app/loto_punto/manage.py makemigrations
python3 /app/loto_punto/manage.py migrate
python3 /app/loto_punto/manage.py runserver 0.0.0.0:3000