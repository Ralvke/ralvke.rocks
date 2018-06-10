FROM node:latest
MAINTAINER Maxim Lisw <ralvke@gmail.com>

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN yarn install --frozen-lockfile --no-cache
RUN yarn build

RUN mkdir /dist
RUN cp -a /usr/src/app/dist/* /dist/
