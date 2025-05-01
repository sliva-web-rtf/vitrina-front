# Этап сборки
FROM node:20-alpine AS build
WORKDIR /app

# Объявляем аргументы
# ARG VITE_API
# ARG VITE_WITH_ADMIN
# ARG VITE_API_TOKEN

ENV VITE_API_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBleGFtcGxlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiTlg2STJEUlFFSElTVUdSU05LWVlVTUxENVRQQkZMTUUiLCJpYXQiOjE3NDYwMzM3MzgsImV4cCI6MTc0NjA0NDUzOCwiaXNzIjoidml0cmluYS5wcm9kIn0.jC1Mf_z-fHk-9gUmfJy6bWLwVQvnjvjQv7cDD_as9oM
ENV VITE_API=https://stage-api.vitrina-rtf.ru/api
ENV VITE_WITH_ADMIN=admin

# Переменные окружения
ENV VITE_MODE=production
ENV VITE_WITH_ADMIN=$VITE_WITH_ADMIN
ENV VITE_API=$VITE_API
ENV VITE_IMAGES_PATH=${VITE_API}/project/image/
ENV VITE_PREVIEW_IMAGE=${VITE_API}/project/preview-image/

# Копируем только необходимые файлы для установки зависимостей
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

# Копируем остальные файлы и собираем проект, передавая apiUrl как переменную окружения
COPY . .
RUN yarn build

# Удаляем node_modules после сборки, чтобы уменьшить размер
# RUN rm -rf node_modules

# Этап для запуска
FROM node:20-alpine
WORKDIR /app

# Устанавливаем минимальный сервер для статики
RUN yarn global add serve

# Копируем собранный проект из этапа сборки
COPY --from=build /app/dist /app/dist

# Команда для запуска сервера статики
CMD ["serve", "-s", "dist", "-l", "5173"]