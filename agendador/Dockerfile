FROM node:22-alpine3.18
WORKDIR /app
EXPOSE 4200
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
RUN npm install -g @angular/cli@14
CMD ng serve --host 0.0.0.0