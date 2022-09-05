FROM node:16.16.0-alpine as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY tsconfig.json /app/
COPY src src
RUN yarn compile

FROM node:16.16.0-alpine as runtime
WORKDIR /app
COPY package.json yarn.lock /app/
COPY --from=build /app/dist/ /app/dist/
RUN yarn --prod
CMD ["node", "./dist/src/index.js"]
