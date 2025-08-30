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

1. Устанавливаем сборщик

```shell
npm install webpack webpack-cli --save-dev
```

Создаем файл конфигурации (по документации):

```shell
vim ./webpack.config.js
```

```javascript
const path = require("path");

// './src/index.js'
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
};
```

Устанавливаем html-webpack-plugin:

```shell
npm install --save-dev html-webpack-plugin
```

5. Установка babel (js компилятор) - dev зависимости (ключ -D), которые не будут учавствовать в сборке (не будут попадать в исходный bundle) - поддержка старых браузеров

```shell
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

Добавляем плагин для работы со стилями:

```shell
npm install --save-dev style-loader css-loader
```

Для работы сборки стилей отдельными файлами:

```shell
npm install --save-dev mini-css-extract-plugin
```

webpack.config.js:

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
```

В plugins добавим new MiniCssExtractPlugin().

В module.rules изменим правило для CSS. Заменим style-loader на MiniCssExtractPlugin.loader.

Для удаления плагина style-loader из проекта используем команду:

```shell
npm uninstall style-loader
```

Добавляем rule для работы с изображениями. Текущий конфигурационный файл имеет следующий вид:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// './src/index.js'
module.exports = {
 mode: "development",
 entry: path.resolve(__dirname, "src", "index.js"),
 output: {
  filename: "main.js",
  path: path.resolve(__dirname, "dist"),
  clean: true,
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, "index.html"),
  }),
 ],
 module: {
  rules: [
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
   {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
   },
  ],
 },
};
```

6. Запускаем сборку. Добавим в package.json:

```json
  "scripts": {
    "start": "webpack"
  },
```
Теперь команда для сборки:

```shell
npm run start
```
Без локального сервера, открывать в браузере нужно файл из директории сборки проекта:

`project/dist/index.html`

1. Сервер

```shell
npm install --save-dev webpack webpack-dev-server
```

и добавляем запись в конфигурационный файл:

```js
	devServer: {
		static: path.resolve(__dirname, "dist"),
    port: 8080,
    open: true,
	},
```

и меняем конфигурацию проекта (package.json):
```json
 "scripts": {
    "start": "webpack serve"
  },
```

Изменения будут отслеживаться динамически.

7. Обновим скрипты в package.json для запуска сборки:

```json
"scripts": {
  "start": "webpack serve --mode=development",
  "build": "webpack --mode=production"
}
```

добавим CssMinimizerWebpackPlugin:

```shell
npm install css-minimizer-webpack-plugin --save-dev
```

обновим конфигурацию webpack:

```js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// ... после свойства module
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
```
