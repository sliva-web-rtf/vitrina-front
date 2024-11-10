# Этап сборки
FROM node:20-alpine AS build
WORKDIR /app

# Объявляем аргументы
ARG VITE_API
ARG VITE_WITH_ADMIN

# Переменные окружения
ENV VITE_MODE=production
ENV VITE_WITH_ADMIN=$VITE_WITH_ADMIN
ENV VITE_API=$VITE_API
ENV VITE_IMAGES_PATH=${VITE_API}/project/image/
ENV VITE_PREVIEW_IMAGE=${VITE_API}/project/preview-image/

# Копируем только необходимые файлы для установки зависимостей
COPY package.json yarn.lock ./
RUN yarn install --force && yarn cache clean

# Копируем остальные файлы и собираем проект, передавая apiUrl как переменную окружения
COPY . .
RUN yarn build

# Удаляем node_modules после сборки, чтобы уменьшить размер
RUN rm -rf node_modules

# Этап для запуска
FROM node:20-alpine
WORKDIR /app

# Устанавливаем минимальный сервер для статики
RUN yarn global add serve 

# Копируем собранный проект из этапа сборки
COPY --from=build /app/dist /app/dist

# Команда для запуска сервера статики
CMD ["serve", "-s", "dist", "-l", "3000"]