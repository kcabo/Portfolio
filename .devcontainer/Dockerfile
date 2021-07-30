FROM node:latest

USER node

WORKDIR /opt/portfolio

COPY --chown=node:node package*.json ./

RUN npm install && npm cache clean --force