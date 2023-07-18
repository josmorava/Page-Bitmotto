FROM node:14-alpine


WORKDIR /landing
COPY package.json /landing

RUN yarn install

COPY . /landing
RUN yarn build

CMD ["npm", "run", "start"]