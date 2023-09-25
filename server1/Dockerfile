FROM node:18-alpine

WORKDIR /server1

COPY package*.json ./

RUN  npm install

COPY  . .

EXPOSE 80

CMD [ "npm","start" ]