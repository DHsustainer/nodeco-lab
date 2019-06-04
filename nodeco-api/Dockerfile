FROM node:10.16.0

# Create app directory
RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]