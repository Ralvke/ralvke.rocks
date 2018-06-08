FROM node:alpine
MAINTAINER Maxim Lisw <ralvke@gmail.com>

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn install --pure-lockfile

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN yarn build
