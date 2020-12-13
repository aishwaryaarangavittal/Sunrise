FROM node:12

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install request --save

COPY . .

EXPOSE 9321
CMD [ "node", "server.js" ]
