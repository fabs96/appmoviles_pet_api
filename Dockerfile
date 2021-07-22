FROM node:14-alpine

COPY ["package.json", "package-lock.json" ,"/usr/src/"]

WORKDIR "/usr/src/"

RUN ["npm", "install"]

COPY ["src", "/usr/src/"]

EXPOSE 3000

CMD ["npx", "nodemon", "src/index.js"]