FROM node:20-alpine

WORKDIR /app

# 启用 corepack 并安装正确版本的 yarn
RUN corepack enable && corepack prepare yarn@4.6.0 --activate

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV=production

CMD ["yarn", "start"] 