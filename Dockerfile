FROM node:20-alpine
WORKDIR /app
COPY app/package.json ./
RUN npm install --ignore-scripts
COPY app/ ./
EXPOSE 3000
CMD ["npm","start"]
