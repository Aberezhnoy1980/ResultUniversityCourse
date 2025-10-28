# Запросы к серверу

1. Реализовать приложение на базе Create React App — страницу со списком дел (Todo list):

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
│   │   └── Loader/
│   │       ├── Loader.jsx
│   │       └── Loader.module.css
│   │
│   ├── todo/                        # Компоненты связанные с задачами
│   │   └── TodoList/                # Stateless компонент списка
│   │       ├── TodoList.jsx
│   │       └── TodoList.module.css
│   │
│   ├── implementations/             # Конкретные реализации
│   │   └── SimpleJSONPlaceholderTodoApp/
│   │       ├── SimpleJSONPlaceholderTodoApp.jsx
│   │       └── SimpleJSONPlaceholderTodoApp.module.css
│   │
├── hooks/                           # Кастомные хуки
│   └── useApi.js                    # Абстракция для API вызовов
│
├── services/                        # Сервисы для работы с API
│   └── jsonPlaceholderApi.js
│
├── utils/                           # Вспомогательные функции
│   ├── constants.js
│   └── helpers.js
│
└── App.jsx
```

[коммит задания]()
