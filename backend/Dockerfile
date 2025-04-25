# backend/Dockerfile
FROM python:3.12-slim
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# 1) Системные зависимости для psycopg2
RUN apt-get update \
 && apt-get install -y --no-install-recommends gcc libpq-dev \
 && rm -rf /var/lib/apt/lists/*

# 2) Копируем и ставим Python-зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip \
 && pip install --no-cache-dir -r requirements.txt

# 3) Копируем файл с переменными окружения,
#    чтобы load_dotenv нашёл backend/.env
COPY .env .

# 4) Копируем весь код приложения, включая alembic.ini и папку alembic/
COPY app/ ./app

# 5) Чтобы импорты вида "from core.config" работали
ENV PYTHONPATH=/app/app:$PYTHONPATH

# 6) Переходим в папку с alembic.ini (она теперь в app/)
WORKDIR /app/app

EXPOSE 8000

# 7) Прогон миграций и поднимем FastAPI
CMD ["sh", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000"]
