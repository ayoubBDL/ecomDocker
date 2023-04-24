#Compile and build angular app
FROM node:18 as build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 5010
