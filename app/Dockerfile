# base image
FROM node:12.2.0-alpine

COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

RUN CADDY_TELEMETRY=on curl https://getcaddy.com | bash -s personal
CMD ["caddy"]
# expose  graphql port 
# TODO: Add debug port
EXPOSE 2015
