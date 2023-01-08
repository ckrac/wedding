FROM node:16-alpine AS builder
RUN apk update
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add libc6-compat build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=cms --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-alpine AS installer

RUN apk update
RUN apk add libc6-compat build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=cms...

FROM node:16-alpine AS runner
WORKDIR /app

RUN apk add vips-dev

COPY --from=installer /app .

WORKDIR /app/apps/cms
EXPOSE 1337
CMD ["yarn", "start"]
