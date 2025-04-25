# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# ставим зависимости
COPY package.json package-lock.json ./
RUN npm ci


# копируем остальной код
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
