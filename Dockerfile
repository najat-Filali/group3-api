FROM node:14
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN cd /home/node/app/dist && npm install

EXPOSE 8080
RUN cd /home/node/app && ls -la
#CMD [ "ls", "-la" ]
CMD [ "node", "dist/index.js" ]