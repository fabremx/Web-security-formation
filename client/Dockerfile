FROM node:12.18.4
WORKDIR /usr/src/client
COPY ./package*.json ./
RUN npm install
COPY ./client .
EXPOSE 8080
CMD [ "npm", "run", "client" ]