FROM node:12-alpine3.15
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "serve"]