FROM node:alpine
WORKDIR /user/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run","start"]