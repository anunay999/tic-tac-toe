FROM node:latest

LABEL CODEOWNER=anunay1997@gmail.com

COPY . /src

RUN cd /src; npm install 

EXPOSE 8080

CMD npm start