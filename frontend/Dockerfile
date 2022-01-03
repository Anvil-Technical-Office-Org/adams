# TODO : 本番・開発・テスト環境でDockerfile切り分け
FROM node:16.13.1-slim

WORKDIR /workspace

RUN chown node:node /workspace

USER node

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile
