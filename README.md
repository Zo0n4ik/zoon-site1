# Zo0n Sites

Основной сайт-портфолио Zo0n Sites для продажи сайтов мастерам, услугам и локальному бизнесу.

Публичная ссылка:

```text
https://zo0n4ik.github.io/zoon-site1/
```

## Что это за сайт

Zo0n Sites показывает, какие сайты можно сделать для малого бизнеса: с услугами, ценами, фото, портфолио, отзывами, контактами и кнопками связи.

Главная задача сайта - быстро объяснить клиенту:

- что именно я делаю;
- кому это подходит;
- сколько примерно стоит;
- какие есть живые примеры;
- как связаться со мной.

## Демо-проекты в портфолио

- GearLine Service - https://gearline-service.vercel.app/
- Lume Flowers - https://lume-flowers-demo.vercel.app/
- BORODA - https://barbershop-boroda.vercel.app/#booking

## Структура страниц

- Главная - `/`
- Портфолио - `/portfolio/`
- Услуги и тарифы - `/services/`
- Процесс работы - `/process/`
- FAQ - `/faq/`
- Контакты - `/contacts/`

## Технологии

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Static export для GitHub Pages

## Локальный запуск

Установить зависимости:

```bash
npm install
```

Запустить dev-сервер:

```bash
npm run dev
```

Из-за `basePath: "/zoon-site1"` локально сайт открывается по адресу:

```text
http://localhost:3000/zoon-site1/
```

## Сборка

```bash
npm run build
```

После сборки Next.js создает статическую папку:

```text
out/
```

## Деплой

Сайт деплоится через GitHub Pages.

Workflow находится здесь:

```text
.github/workflows/deploy.yml
```

Он выполняет:

1. `npm install`
2. `npm run build`
3. добавляет `.nojekyll`
4. публикует папку `out` в ветку `gh-pages`

В настройках GitHub Pages нужно использовать:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```

## Ассеты портфолио

Превью проектов сохранены локально:

```text
public/portfolio/gearline-preview.png
public/portfolio/lume-preview.png
public/portfolio/boroda-preview.png
```

Все кнопки заказа ведут в Telegram:

```text
https://t.me/Zo0n4ik
```
