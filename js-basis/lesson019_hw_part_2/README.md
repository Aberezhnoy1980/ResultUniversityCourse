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
[commit задачи 1](https://github.com/Aberezhnoy1980/ResultUniversityCourse/commit/e0684c294dd9c774ddef1d463dbc4abbea948f4e)

## Задание #2

Вы молодцы! Даже Webpack вам по плечу! Сейчас же нужно разобраться с теми же пунктами, которые были при использовании rollup.js:

* Подключение стилей
* Работа с картинками
* Поддержка кода другими браузерами
* Запуск проекта на локальном сервере (localhost)
  
Необходимо установить несколько плагинов в <span style="color: #EB5757">"devDependencies"</span> и добавить немного кода в конфигурационный файл:

1. Для подключения стилей используйте “css-loader” и “style-loader”: [ссылка](https://webpack.js.org/guides/asset-management/#loading-css)
2. Для работы с картинками добавьте в <span style="color: #EB5757">webpack.config.js</span> данный код: [ссылка](https://webpack.js.org/guides/asset-management/#loading-images)

```js
module: {
    rules: [
      {
        test: /.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
},
```

3. Для того, чтобы переводить JavaScript в код, который поддерживают даже старые браузеры, используйте “babel-loader”: [ссылка](https://webpack.js.org/loaders/babel-loader/#root).
4. Для запуска проекта на локальном сервере вам понадобится плагин “webpack-dev-server”: [ссылка](https://webpack.js.org/guides/development/#using-webpack-dev-server). Для его конфигурации добавьте данный код в <span style="color: #EB5757">webpack.config.js</span>:

```js
devServer: {
  port: 8080,
  open: true,
},
```

Также, для того, чтобы Webpack обрабатывал HTML и автоматически подключал в него JavaScript, необходимо установить "html-webpack-plugin": [ссылка](https://webpack.js.org/plugins/html-webpack-plugin/#root). Добавьте данный код в <span style="color: #EB5757">webpack.config.js</span> для конфигурации данного пакета:

```js
plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.html'),
  }),
]
```

После в файл <span style="color: #EB5757">index.js</span> добавьте код, который вы писали при использовании rollup.js. Также не забудьте добавить картинку в <span style="color: #EB5757">assets</span> и скопировать файл со стилями <span style="color: #EB5757">index.css</span>.

Кроме этого, замените команды в <span style="color: #EB5757">package.json</span> на следующие:

* ```json
  "start": "webpack serve"
  ```

* ```json
  "prod": "webpack"
  ```

Затем запустите команду <span style="color: #EB5757">"start"</span>. Если вы все сделали правильно и следовали инструкциям в ссылках по установке плагинов, то у вас должен открыться локальный сервер. У вас должна отобразиться картинка из <span style="color: #EB5757">assets</span> и примениться все стили. Если что-то пошло не так, то, возможно, у вас возникла ошибка. В данном случае вам нужно найти ее и исправить.

1. Добавляем плагин для работы со стилями:

Так как мы хотим работать со стилями, подключаемыми с помощью файла, а не скриптом в теге <span style="color: #EB5757">\<head></span>, то вместо <span style="color: #EB5757">style-loader</span> будем использовать <span style="color: #EB5757">MiniCssExtractPlugin.loader</span>

```shell
npm i -D css-loader # style-loader не устанавливаю
```

Для работы сборки стилей отдельными файлами:

```shell
npm i -D mini-css-extract-plugin
```

<span style="color: #EB5757">webpack.config.js</span>:

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
```

В <span style="color: #EB5757">plugins</span> добавим <span style="color: #EB5757">new MiniCssExtractPlugin()</span>.

В <span style="color: #EB5757">module.rules</span> изменим правило для CSS. Заменим <span style="color: #EB5757">style-loader</span> на <span style="color: #EB5757">MiniCssExtractPlugin.loader</span>.

также добавим оптимизатор <span style="color: #EB5757">CssMinimizerWebpackPlugin</span>:

```shell
npm i -D css-minimizer-webpack-plugin
```

2. Добавляем rule для работы с изображениями в <span style="color: #EB5757">module.rules</span> файла конфигурации <span style="color: #EB5757">webpack.config.js</span>.

```js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
},
```

3. Устанавливаем babel и добавляем rule для работы с ним в <span style="color: #EB5757">module.rules</span> файла конфигурации <span style="color: #EB5757">webpack.config.js</span>.

```shell
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

```js
{
  test: /\.(?:js|mjs|cjs)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      targets: "defaults",
      presets: [["@babel/preset-env"]],
    },
  },
},
```

4. Устанавливаем сервер и добавляем свойство для работы с ним в <span style="color: #EB5757">module.rules</span> файла конфигурации <span style="color: #EB5757">webpack.config.js</span>.

```shell
npm i -D webpack-dev-server
```

```js
devServer: {
  static: path.resolve(__dirname, "dist"),
  port: 8080,
  open: true,
},
```

5. Устанавливаем html-webpack-plugin:

```shell
npm i -D html-webpack-plugin
```

и добавляем плагин для работы с ним в <span style="color: #EB5757">module.rules</span> файла конфигурации <span style="color: #EB5757">webpack.config.js</span>.

```js
plugins: [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
  })
]
```

Автоматизируем сборку и запуск. Тестируем и делаем комит в репозиторий:

Файл <span style="color: #EB5757">package.json</span>:

```json
  "scripts": {
    "start": "webpack serve",
    "prod": "webpack"
  },
```

тестируем:

```shell
npm start
```

фиксируем проделанную работу по конфигурации проекта webpack;

```shell
git add -A; git commit -am"webpack configured"; git push origin main
```
