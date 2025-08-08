FROM node:20-alpine
WORKDIR /app
COPY app/package.json ./
RUN npm ci --ignore-scripts
COPY app/ ./
EXPOSE 3000
CMD ["npm","start"]
