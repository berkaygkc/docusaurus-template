FROM node:lts

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./website /app/website

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]
