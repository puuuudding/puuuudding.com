FROM node:erbium-alpine

RUN yarn global add serve

WORKDIR /puuuudding.com
COPY . ./
RUN yarn install --frozen-lockfile && yarn build

EXPOSE 9999
CMD serve -s build -p 9999
