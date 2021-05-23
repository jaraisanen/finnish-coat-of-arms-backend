FROM node:lts-buster
WORKDIR /backend
EXPOSE 8000

COPY ./src /backend/src
COPY ./package.json /backend/package.json
COPY ./package-lock.json /backend/package-lock.json
COPY ./tsconfig.json /backend/tsconfig.json

RUN npm i
ENV NODE_ENV=production
CMD ["npm", "start" ]
