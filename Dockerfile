FROM ubuntu:latest


RUN apt-get update && apt-get install -y \
    unzip \
    vim \
    git \
    wget \
    curl

RUN apt-get update &&\
	apt-get install -y nodejs

RUN apt-get install -y npm && npm install -g npm@latest


COPY . /tmp
WORKDIR tmp
EXPOSE 3000
cmd ["npm", "start"]





