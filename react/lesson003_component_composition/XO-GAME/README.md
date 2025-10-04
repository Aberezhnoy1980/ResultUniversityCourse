# Игра крестики-нолики

## Реализовать игру «Крестики-Нолики»

* игровое поле — 3х3 клетки;
* над полем информация — чей текущий ход (крестика или нолика) / информация о победе одной из сторон или ничья;
* при клике на клетку в ней должен отрисовываться символ стороны, у которой был текущий ход (крестик или нолик);
* если 3 одинаковых символа размещается в одну линию (горизонтально, вертикально или по диагонали), то остановить игру и сообщить о победе крестика или нолика;
реализовать кнопку «Начать заново», при клике на которую поле будет очищаться и игра начнётся сначала;
* дизайн на усмотрение разработчика.

## Стек

* сборщик: **vite**
* фреймворк: **react**
* язык: **JavaScript**
* библиотеки: **prop-types**

## Создание базового проекта

Переходим в директорию проекта:

```shell
npm create vite@latest

> npx
> "create-vite"
│
◇  Project name:
│  XO-GAME
│
◇  Package name:
│  XO
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
```

## Подключение и использование PropTypes в React 19

* Устанавливаем библиотеку (devDependencies):

```shell
npm install -D prop-types
```

* Плагин для babel для перехвата использования PropTypes и добавления кода для их проверки:

```shell
npm install -D babel-plugin-check-prop-types
```

* Настройка vite.config.js:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";

  return {
    plugins: [
      react({
        babel: {
          plugins: isDev ? ["check-prop-types"] : [],
        },
      }),
    ],
  };
});
```
