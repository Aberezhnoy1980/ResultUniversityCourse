# Как работать с проектом и его сборкой

## Окружение

1. Установка Node.js
2. Проверка

```shell
node --vevsion; npm --version 
```

3. Иницмализация проекта:

В директории с проектом инициируем порект:

```shell
npm init -y # -y ключ согласия. Можно без него в интерактиве
```

4. Устанавливаем и проверяем сборщик

```shell
npm install --global rollup # может понадобится sudo
rollup --version
```

5. Запускаем сборку с конфигуурационного файла:

```shell
rollup -c
```
6. Установка babel (js компилятор) - dev зависимости (ключ -D), которые не будут учавствовать в сборке (не будут попадать в исходный bundle)

```shell
npm i -D @rollup/plugin-babel @babel/core
```

Также добавить:

```shell
npm i -D @babel/preset-env @rollup/plugin-node-resolve
```

Добавляем плагин для рабаоты со стилями:

```shell
npm i -D rollup-plugin-styles
```

Добавляем плагин для работы с картинками

```shell
npm i -D @rollup/plugin-image
```

7. Сервер

```shell
npm i -D rollup-plugin-server
```

Подключим плагин для live-reload

```shell
npm i -D rollup-plugin-livereload
```

Для отслеживания изменений запускаем сборку в режиме watching

```shell
rollup -c -w
```
8. Для автоматизации запуска сборки пропишем в package.json конфигурации:

```json
  "scripts": {
    "dev": "rollup -c -w",
    "prod": "rollup -c"
  },
```
