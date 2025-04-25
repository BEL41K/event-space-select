# frontend/Dockerfile
FROM node:18-slim

WORKDIR /app

# 1) Копируем package-манифесты и ставим зависимости
COPY package.json package-lock.json ./
RUN npm ci

# 2) Копируем весь фронтенд-код
COPY . .

EXPOSE 3000

# 3) Запускаем Vite-dev-сервер
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
