# GREEN-API: редизайн лендинга

## Стек

- [Astro 7](https://astro.build/): статическая сборка, страница отдаётся как готовый HTML
- [React 19](https://react.dev/): только для интерактивных блоков (островов)
- TypeScript, SCSS Modules, [clsx](https://github.com/lukeed/clsx)
- [Shiki](https://shiki.style/): подсветка кода на этапе сборки
- [Bun](https://bun.sh/): пакетный менеджер и запуск скриптов
- ESLint + Prettier

## Требования

- [Bun](https://bun.sh/) 1.2+
- Node.js 22.12+ (нужен самому Astro)

Установить Bun на macOS / Linux:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Быстрый старт

```bash
# 1. Установить зависимости
bun install

# 2. Запустить dev-сервер
bun run dev
```

Откройте адрес, который выведет команда (по умолчанию http://localhost:4321). Изменения в коде подхватываются без перезагрузки.

