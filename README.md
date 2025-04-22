<h1>Event Space Select</h1>

>веб-приложения для организации мероприятий с возможностью онлайн-бронирования и управления списком участников

<h2>Стэк проекта</h2>
<h3>BackEnd</h3>
- FastAPI
- SQLAlchemy + PostgreSQL

<h3>FronEnd</h3>
- React.js + Vite
- HTML + CSS + Typescript

<h2>Установка и запуск приложения</h2>

### 1. Создать `./backend/.env`

```bash
cp ./backend/.env.example ./backend/.env
```

> Измените `./backend/.env`, если нужно

### 2. Запуск backend frontend и db

```bash
docker compose --env-file ./backend/.env  up --build
```

### 3. Накатить миграции

```bash
cd backend/app &&
alembic upgrade head
```

### 4. Открыть [сайт](http://127.0.0.1:3000/) или [api](http://127.0.0.1:8000/docs)

>P.S - пока что backend & frontend не связаны вместе
