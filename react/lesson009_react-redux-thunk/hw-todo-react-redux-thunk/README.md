# Приложение todo с react-redux и react-thunk

### Установка зависимостей

* работа с соcтоянием:

```shell
npm i react-redux redux
```

* работа с асинхронным кодом:

```shell
npm i redux-thunk
```

### Создание базы данных и деплой приложения

* Регистрируемся на [сервисе](https://firebase.google.com/) с помощью google account и переходим в консоль (go to console)
* Создаем проект firebase - Create a project -> web
* Копируем конфигурацию и настраиваем [переменные окружения](https://vite.dev/guide/env-and-mode.html#env-variables-and-modes) (.env и .env.exmaple для совместной разработки)
* Создаем базу данных (в консоли firebase): Build -> Realtime Database -> Create Database
* Выбираем регион и режим работы (test для разработки) и получаем url базы данных
* Задаем сущности БД (архитектуру): можно это сделать с помощью import JSON консоли БД (вертикальные три точки справа) - используем файл json-server базы данных (без id). Также, можно работать с пустой БД (с ее отсутсвием). Она будет создаваться и наполняться при добалении todo.
* Добавляем (обновляем) правило в Rules консоли управления БД для индексирования todo:

```JSON
{
  "rules": {
    ".read": "now < 1767214800000",  // 2026-1-1
    ".write": "now < 1767214800000",  // 2026-1-1
    ".indexOn": ["createdAt"]
  }
}
```
* hosting и deploy. Устанваливаем firebase CLI (глобально, если еще не установлено):

```shell
npm install -g firebase-tools
```

проверка:

```shell
firebase --version
```

* Sign in to Google

```shel
firebase login
```

* Инициализируем хостинг в корне проекта:

```shel
firebase init
```

двлее опции:

 `
 ✔ Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. <em style="color: green;">Hosting: Set up deployments for static web apps</em>

 ✔ Please select an option: <em style="color: green;">Use an existing project</em>

✔ Select a default Firebase project for this directory: <em style="color: green;">todosproject-9608a (todosProject)</em>

✔ What do you want to use as your public directory? <em style="color: green;">dist</em> (для vite. Также, можно конфигурировать название выходного бандла в package.json)

✔ Configure as a single-page app (rewrite all urls to /index.html)? <em style="color: green;">Yes</em>

✔ Set up automatic builds and deploys with GitHub? <em style="color: green;">No</em>. Опционально можно синхронизировать с git actions.

✔  Wrote dist/index.html

✔  Wrote configuration info to firebase.json
✔  Wrote project information to .firebaserc

✔  Firebase initialization complete!
 `

* Непосредственно, deploy. Предварительно делаем build:

```shell
npm run build
```

и деплой:

```shell
firebase deploy
```

Приложение доступно по адресу [https://](https://todosproject-9608a.web.app/)
