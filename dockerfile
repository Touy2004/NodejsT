#version of node
FROM node:18
#path on cloud
WORKDIR /usr/src/app
#package json all
COPY package*.json ./
#install package
RUN npm install

COPY . .

ENV PORT = 8000
ENV SECRET_KEY = touy
ENV SAL_I = 1
ENV CLOUDINARY_NAME = dzjf5siz3
ENV CLOUDINARY_API_KEY = 629378774136477
ENV CLOUDINARY_API_SECRET_KEY = ssMUX-oZ3u4LThs6rLU37MhHc94

EXPOSE 8000

CMD ["npm", "start"]