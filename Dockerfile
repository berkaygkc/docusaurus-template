FROM node:lts

WORKDIR /app/website

EXPOSE 3000
COPY ./website /app/website

RUN npm install
RUN npm run build

USER 1000

CMD ["npm", "run", "serve"]
