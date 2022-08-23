FROM node:lts as dependencies
WORKDIR /web
COPY package.json yarn.lock ./
# Don’t generate a yarn.lock lockfile and fail if an update is needed
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /web
# Copy the main application
COPY . ./
COPY --from=dependencies /web/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /web
ENV NODE_ENV production
COPY --from=builder /web/.next ./.next
COPY --from=builder /web/next.config.js ./
COPY --from=builder /web/node_modules ./node_modules
COPY --from=builder /web/package.json ./package.json
COPY --from=builder /web/public ./public
EXPOSE 3001
CMD ["yarn", "start"]