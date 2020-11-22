FROM node:12.18.4
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait