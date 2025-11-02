# Запросы к серверу

## 1. Реализовать приложение на базе Create React App — страницу со списком дел (Todo list):

* содержание одного дела — небольшой текст;
* использовать JSON Placeholder с ручкой (endpoint) «todos»;
* реализовать только вывод списка;
* дизайн на усмотрение разработчика (но должен быть аккуратный, приятный на вид).

Приложение реализовано на базе vite.

Примерная файловая структура проекта (с учетом последующих задач - изменения в последующих коммитах):

```TXT
src/
├── components/
│   ├── ui/                          # Переиспользуемые UI компоненты
│   │   ├── Loader/
│   │   │   ├── Loader.jsx
│   │   │   └── Loader.module.css
│   │   └── index.js                 # Оптимизмция импортов/экспортов
│   │
│   ├── todo/                        # Компоненты связанные с задачами
│   │   ├── TodoList/                # Stateless компонент списка
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoList.module.css
│   │   ├── TodoForm                 # Компонент форма для добавления todo
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoForm.module.css
│   │   ├── TodoItem                 # Компонент элемента списка
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoItem.module.css
│   │   └── Index.js
│   │
│   └── implementations/             # Конкретные реализации
│       ├── SimpleJSONPlaceholderTodoApp/
│       │   ├── SimpleJSONPlaceholderTodoApp.jsx
│       │   └── SimpleJSONPlaceholderTodoApp.module.css
│       ├── JsonServerTodoApp/
│       │   ├── JsonServerTodoApp.jsx
│       │   └── JsonServerTodoApp.module.css
│       ├── FirebaseTodoApp/
│       │   ├── FirebaseTodoApp.jsx
│       │   └── FirebaseTodoApp.module.css
│       └── Index.js
│
├── hooks/                           # Кастомные хуки
│   ├── useApi.js                    # Абстракция для API вызовов
│   ├── useDebounce.js
│   ├── useTodos.js
│   ├── useFirebaseTodos.js
│   └── Index.js
│
│
├── services/                        # Сервисы для работы с API
│   ├── jsonPlaceholderApi.js
│   ├── jsonServerApi.js
│   ├── firebaseService.js
│   └── Index.js
│
├── utils/                           # Вспомогательные функции
│   ├── constants.js
│   ├── checkEnvVars.js
│   └── index.js
│
└── App.jsx
```

[коммит задания](https://github.com/Aberezhnoy1980/ResultUniversityCourse/commit/54deb75e40875bce1eeb2bbb0ec9c38e8d6b0ab4)

## 2. Переделать приложение, заменив JSON Placeholder на JSON Server:

* начальный список дел отсутствует (пустой массив);
* реализовать CRUD-операции, добавить возможность добавления, изменения и удаления дела;
* реализовать поиск дел по заданной фразе (для нахождения элемента в тексте дела должен быть совпадающий с введенной фразой фрагмент);
* реализовать кнопку для включения режима сортировки дел по алфавиту, если кнопка не нажата — изначальная сортировка (т. е. отсутствие сортировки).

Используйте стабильную версию json-server для решения задания:

   ```
   npx json-server@0.17.4 --watch db.json
   ```

или:

   ```
   npm install json-server@0.17.4
   ```

Дополнительно. Реализовать продвинутый поиск с помощью <em style="color: #EB5757">debounce()</em>.

### Имплемемнтация

* Установка [сервера](https://www.npmjs.com/package/json-server)

```shell
npm i json-server
```

* Добавим в <em style="color: #EB5757">package.json</em> скрипт запуска сервера с параметризацией порта и времени задержки операций (имитация работы сети)

```json
...
	"scripts": {
		...,
		"json-server":  "json-server --watch src/data/db.json --port 3001 --delay 2000"
	},
...
```

### Summary

* **Архитектура и используемые хуки:**

  * `useState` - управление состоянием компонента (изменение вызывает перерендер)
  * `useEffect` - обработка побочных эффектов (загрузка данных, подписки)
  * `useCallback` - мемоизация функций для стабильных зависимостей в `useEffect`
  * `useMemo` - кэширование результатов вычислений для оптимизации производительности

* **Ключевые архитектурные решения:**

  * **Оптимистичное обновление UI**: CRUD-операции сразу отражаются в интерфейсе, затем синхронизируются с БД
  * **Разделение ответственности**: сервисный слой отделен от логики компонентов
  * **Кастомные хуки**: инкапсуляция бизнес-логики работы с данными
  * **Компонентный подход**: переиспользуемые UI-компоненты (TodoList, TodoItem, Loader)

* **Особенности реализации:**

  * **Локальная БД**: json-server обеспечивает REST API для разработки
  * **Клиентская фильтрация и сортировка**: выполняется на стороне React для простоты
  * **Debounce поиска**: оптимизация производительности при частом вводе
  * **Error Boundaries**: обработка ошибок загрузки данных

* **Учебный контекст:**

  * **Лабораторные условия**: один экземпляр приложения = один пользователь
  * **Рассинхронизация допустима**: в production потребуется real-time синхронизация
  * **Архитектура готова к масштабированию**: легко добавить новые реализации (Firebase и др.)

### **Технические детали:**
- Реализован полноценный CRUD (Create, Read, Update, Delete)
- Поиск с debounce для оптимизации производительности
- Сортировка по алфавиту с toggle-режимом
- Валидация ввода и обработка ошибок
- Интуитивный UX с мгновенной обратной связью

[коммит задания](https://github.com/Aberezhnoy1980/ResultUniversityCourse/commit/7702c3dcfb1581b89a5e43a097adb36f5846ce63)

## 3. Также дополнительно — сделать приложение из второго пункта, но с использованием Firebase (без использования JSON Server):

* зарегистрироваться на платформе Firebase;
* создать базу данных и использовать её в приложении;
* выполнить deploy и проверить работу приложения.

**Обратите внимание!**

Firebase не очень удобен для реализации поиска и сортировки, поэтому данный функционал можно реализовать не на серверной стороне, а на клиентской.

Однако при желании вы все же можете реализовать сортировку с помощью Firebase, для этого обратитесь к [этой странице в документации](https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data) <em style="color: #EB5757">(orderByChild()</em>). Обратите внимание:

* для работы необходимо в Realtime Database Security Rules добавить настройку <em style="color: #EB5757">.indexOn</em>  с ключами, по которым будет происходить сортировка ([документация](https://firebase.google.com/docs/database/security/indexing-data#section-indexing-order-by-child));
* для получения элементов можно воспользоваться [функцией <em style="color: #EB5757">get()</em>](https://firebase.google.com/docs/database/web/read-and-write#read_data_once), в нее передаем <em style="color: #EB5757">query()</em> с необходимой сортировкой;
* получение объекта с элементами с помощью <em style="color: #EB5757">snapshot.val()</em> не гарантирует порядок сортировки, поэтому для перебора элементов в порядке сортировки используйте метод <em style="color: #EB5757">snapshot.forEach()</em>;
* сортировка регистрозависима.

### Имплемемнтация

* Регистрируемся на [сервисе](https://firebase.google.com/) с помощью google account и переходим в консоль (go to console)
* Создаем проект firebase - Create a project -> web
* Копируем конфигурацию и настраиваем [переменные окружения](https://vite.dev/guide/env-and-mode.html#env-variables-and-modes) (.env и .env.exmaple для совместной разработки)
* Создаем базу данных (в консоли firebase): Build -> Realtime Database -> Create Database
* Выбираем регион и режим работы (test для разработки) и получаем url базы данных
* Задаем сущности БД (архитектуру): можно это сделать с помощью import JSON консоли БД (вертикальные три точки справа) - используем файл json-server базы данных (без id). Также, можно работать с пустой БД (с ее отсутсвием). Она будет создаваться и наполняться при добалении todo.
* Добавляем правило в Rules консоли управления БД для индексирования todo:

```JSON
{
  "rules": {
    ".read": "now < 1764622800000",  // 2025-12-2
    ".write": "now < 1764622800000",  // 2025-12-2
    ".indexOn": ["createdAt"]
  }
}
```
* hosting и deploy. Устанваливаем firebase CLI (глобально):

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

Приложение доступно по адресу https://todosproject-9608a.web.app

[коммит задания](https://github.com/Aberezhnoy1980/ResultUniversityCourse/commit/6861da2805c7db40365d0e4181a04df4c1a5c11f)
