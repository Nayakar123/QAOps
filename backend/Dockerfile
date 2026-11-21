FROM node:20-bookworm-slim

WORKDIR /app/backend

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl \
    && rm -rf /var/lib/apt/lists/*

COPY backend/package.json backend/package-lock.json ./
RUN npm ci

COPY backend/ ./
RUN npx prisma generate

CMD ["sh", "-c", "npx prisma db push --force-reset && npm run seed && npm start"]
