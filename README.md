# Event Space Select

## Описание

Event Space Select — это приложение для управления выбором площадок для проведения мероприятий. Состоит из двух сервисов:

- **backend**: FastAPI-приложение с базой данных PostgreSQL и системой миграций Alembic
- **frontend**: JavaScript-приложение (React/Vue) для пользовательского интерфейса

## Структура репозитория

```
├── backend/           # FastAPI-сервис
│   ├── app/           # исходники приложения
│   ├── Dockerfile
│   └── .env.example   # пример переменных окружения
│
├── frontend/          # фронтенд-сервис
│   ├── src/           # исходники UI
│   └── Dockerfile
│
└── docker-compose.yml # конфигурация всех сервисов
```

## Требования

- Docker (v20.10+)
- Docker Compose (v2+)

## Настройка

1. **Клонируйте репозиторий**

   ```bash
   git clone https://github.com/BEL41K/event-space-select.git
   cd event-space-select
   ```

2. **Создайте файл переменных окружения для бэкенда**

   ```bash
   cp backend/.env.example backend/.env
   ```

   Отредактируйте `backend/.env`, заполнив параметры подключения к базе:

   ```dotenv
   POSTGRES_DB=your_database_name
   POSTGRES_USER=your_database_user
   POSTGRES_PASSWORD=your_database_password
   POSTGRES_HOST=db
   POSTGRES_PORT=5432
   
   BACKEND_PORT=8000
   ```

3. (Опционально) Если потребуется, создайте или измените `.env` для фронтенда в директории `frontend/`.

## Запуск через Docker

В корне проекта выполните:

```bash
docker compose up --build
```

- **Backend** доступен по адресу: [http://localhost:8000](http://localhost:8000)
- **Frontend** доступен по адресу: [http://localhost:8080](http://localhost:8080)

При первом запуске автоматически применяются миграции Alembic к базе данных.

## Полезные команды

````
docker compose exec backend alembic upgrade head
````

## Лицензия

MIT

