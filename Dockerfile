FROM node:alpine
MAINTAINER Maxim Lisw <ralvke@gmail.com>

WORKDIR /tmp
COPY package.json yarn.lock /tmp/
RUN yarn install --pure-lockfile

RUN rm -rf /usr/src/app/public
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN yarn build
