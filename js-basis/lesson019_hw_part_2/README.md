# Проект на webpack

## Хронология разработки

## Задание #1

С инициализацией проекта на rollup.js вы справились успешно. Вся команда разработки довольна вами, потому что все теперь могут начать реализовывать функционал.

Ваш начальник понял, что вы достаточно хороший разработчик, и поэтому просит тебя помочь инициализировать еще один проект. Только дело в том, что требование у заказчика стоит следующее: необходимо использовать только Webpack.

Сейчас ваша задача состоит в том, чтобы из пустой папки инициализировать проект при помощи Webpack.

В папке проекта создайте 3 файла: <span style="color: #EB5757;">index.html</span>, <span style="color: #EB5757;">index.css</span> и <span style="color: #EB5757;">index.js</span>. Добавьте в <span style="color: #EB5757;">index.html</span> базовую разметку HTML. После создайте файл <span style="color: #EB5757;">package.json</span> при помощи команды 

```sh 
npm init -y
```

Также в <span style="color: #EB5757;">index.js</span> добавьте строчку кода:

```js
console.log('Hello World!');
```

Теперь, руководствуясь документацией Webpack: [ссылка](https://webpack.js.org/guides/installation/), видео с уроком, установите Webpack как пакет и создайте конфигурационный файл <span style="color: #EB5757;">webpack.config.js</span>.

В <span style="color: #EB5757;">webpack.config.js</span> добавьте базовую конфигурацию для запуска проекта. Для этого хватит свойств <span style="color: #EB5757;">entry</span>, <span style="color: #EB5757;">output</span> и <span style="color: #EB5757;">mode</span>. Никаких плагинов пока не добавляйте.

После в файл <span style="color: #EB5757;">package.json</span> добавьте команду

```json
"start": "webpack --config webpack.config.js".
```

Затем запустите команду <span style="color: #EB5757;">"start"</span>. У вас должен сгенерировать JS-файл, название которого вы указывали в свойстве <span style="color: #EB5757;">output</span> в файле <span style="color: #EB5757;">webpack.config.js</span>. Если файл не сгенерировался, то, возможно, вы сделали что-то не так и у вас возникла ошибка. В данном случае вам нужно найти ее и исправить.

1. Инициируем проект и создаем package.json:

```sh
# из корня проекта/репозитория
npm init -y
```

2. Устанавливаем сборщик

```shell
npm i -D webpack webpack-cli
```

Создаем файл конфигурации:

```shell
vim ./webpack.config.js
```

```javascript
const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "index.js"),
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "target"),
      clean: true,
    },
};
```

4. Модифицируем свойство "script" файла конфигурации package.json для автоматизации сборки и запуска:

```json
...
	"scripts": {
		"start": "webpack --config webpack.config.js",
	},
    ...
...
```

5. Тестируем проект и сохраняем текущиее состояние проекта в репозиториях:

```sh
npm start
```

```sh
git add .; git commit -am"webpack project init"; git push origin main
```
