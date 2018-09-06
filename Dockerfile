FROM node:8-alpine
RUN npm install express --save
COPY dist/cit-challenge .
ENTRYPOINT ["node", "server.js"]
EXPOSE 5000
