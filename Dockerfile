FROM python:3.6.5-jessie

WORKDIR /
COPY . /app

ENV ENV local
EXPOSE 3000

RUN pip install -r /app/requirements.txt

RUN chmod +x app/entrypoint.sh

ENTRYPOINT ["sh", "app/entrypoint.sh"]