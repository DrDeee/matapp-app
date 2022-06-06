FROM node:16-alpine as builder

COPY . .

RUN rm -rf node_modules && \
    yarn install &&\
    yarn run build

FROM node:16-alpine as runner

WORKDIR /app

COPY --from=builder .nuxt ./.nuxt
COPY --from=builder package.json .
COPY --from=builder yarn.lock .
COPY --from=builder config.js .
COPY --from=builder nuxt.config.js .

RUN yarn install --production

ENV HOST=0.0.0.0
EXPOSE 3000

CMD [ "yarn", "run", "start" ]