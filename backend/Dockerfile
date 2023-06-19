FROM node:14.17.0-alpine
WORKDIR '/app'

COPY ./package.json ./
RUN npm install
RUN npm install ts-node
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]