FROM node:20-bookworm-slim

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ ./

CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
