FROM node:erbium-alpine

EXPOSE 9999
WORKDIR /home/node/puuuudding.com

RUN yarn global add serve

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . ./
RUN yarn build

CMD serve -s build -p 9999
