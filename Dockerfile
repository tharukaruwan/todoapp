# FROM debian:

FROM node:10-slim

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm","start"] 

