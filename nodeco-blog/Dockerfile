FROM node:10.16.0

# Create app directory
RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]