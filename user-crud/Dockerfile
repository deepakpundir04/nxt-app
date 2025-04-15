# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.20.3

FROM node:${NODE_VERSION}-alpine

WORKDIR /src/app

COPY . .
RUN npm install
 RUN npm run build

EXPOSE 3000

CMD npm run start
