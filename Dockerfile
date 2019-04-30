FROM node:10
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm install
RUN npm install @angular/cli -g
COPY . /usr/app/
RUN ng build
EXPOSE 3000
CMD ["node", "/usr/app/server.js"] 