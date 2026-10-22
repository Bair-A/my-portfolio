# Портфолио Байра Авеева

Одностраничное портфолио на Next.js, React, Tailwind CSS и shadcn/ui. Дизайн основан на открытом шаблоне [Magic UI Portfolio](https://github.com/dillionverma/portfolio) (MIT, © Dillion Verma).

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000/my-portfolio
npm run build    # статический экспорт в папку out/
```

## Как поменять содержимое

Всё содержимое сайта лежит в одном файле: `src/data/resume.tsx`.

- Пункты с `mock: true` выдуманные, на сайте у них жёлтая плашка «пример». Замените их своими данными и уберите `mock: true`.
- Скриншоты проектов: положите картинку в `public/` и укажите её в поле `image`, например `` `${BASE_PATH}/projects/foodster.png` ``.

## Деплой

Сайт собирается как статический (`output: "export"`) с `basePath: "/my-portfolio"` для GitHub Pages. Деплой выполняет workflow `.github/workflows/nextjs.yml` при пуше в `main`.
