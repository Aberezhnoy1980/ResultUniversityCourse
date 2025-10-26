# Работа с серверами

## Установка [json-server](https://www.npmjs.com/package/json-server)

* глобальная установка (флаг -g)

```shell
npm install json-server
```

* создаем "базу данных" db.json:

```json
{
 "table": [
  {
   "id": "001",
   "title": "title",
   "value": "value",
  },
  {
   "id": "002",
   "title": "title2",
   "value": "value2",
  }
 ]
}
```

* запуск сервера (ключ для кастомизации порта: --port 3004)

```shell
npx json-server db.json
```

* если установлена последняя стабильная версия:

```shell
json-server --watch ./src/data/db.json --delay 2500
```

- где --delay, задержка чтения

## Установка [firebase](https://firebase.google.com/)

```shell
npm install firebase
```

### Hosting firebase

* CLI installation

```shell
sudo npm install -g firebase-tools
```
* Project initialization

```shell
firebase login
```

```shell
firebase init
```

```shell
firebase deploy
```
