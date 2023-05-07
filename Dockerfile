FROM node:19
COPY ./ /src
WORKDIR /src
RUN npm install
ENTRYPOINT ["node", "/src/index.js"]