FROM node:16

WORKDIR /service

COPY package*.json ./

RUN npm install -g npm@latest
RUN npm i core-util-is

COPY . /service

RUN npm run setup

# bootstarp the application
CMD ["npm", "start"]

