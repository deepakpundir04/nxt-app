# Express.js
ARG NODE_VERSION=18.20.3

FROM node:${NODE_VERSION}-alpine

WORKDIR /app
COPY . .
RUN npm install
# COPY . .

EXPOSE 4000 
# testing new docker

CMD [ "npm", "start" ]