FROM ubuntu:20.04

FROM node:12

ENV DEBIAN_FRONTEND=noninteractive  

RUN apt-get update \
  && apt-get install -y \
  wget \
  curl \
  libxrender1 \
  libfontconfig \
  libxtst6 \
  xz-utils


RUN wget https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz
RUN tar vxf wkhtmltox-0.12.3_linux-generic-amd64.tar.xz
RUN cp wkhtmltox/bin/wk* /usr/local/bin/
RUN wkhtmltopdf -V

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]