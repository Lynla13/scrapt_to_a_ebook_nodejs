# Make 2 container - 1 for buid ts file (DEV) and 1 for build js file only (final product)
FROM node:16-alpine as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# Containner 2

FROM node:16-alpine as production

ARG NODE_EVN=production
ENV NODE_EVN=${NODE_EVN}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci --only=production

#Coppy file form 1 container to 2 container

COPY --from=development /usr/src/app/dist ./dist

# You can use NPM here but should use node instead

CMD [ "node", "dist/index.js" ]