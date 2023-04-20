#Compile and build angular app
FROM node:latest as build

WORKDIR /usr/local/app

COPY . /usr/local/app

RUN npm install

RUN npm run build

#serve app with nginx
FROM nginx:latest

COPY --from=build /usr/local/app /usr/share/nginx/html

EXPOSE 80
