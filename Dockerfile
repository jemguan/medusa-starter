FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV=production

CMD ["yarn", "start"] 