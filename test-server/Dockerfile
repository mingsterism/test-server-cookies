# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY server.js /app/server.js
RUN npm install

# start app
CMD ["node", "server.js"]