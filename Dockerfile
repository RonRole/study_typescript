FROM node:latest
RUN mkdir /app
WORKDIR /app
RUN npm install -g typescript