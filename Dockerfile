FROM node:18

WORKDIR .

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]