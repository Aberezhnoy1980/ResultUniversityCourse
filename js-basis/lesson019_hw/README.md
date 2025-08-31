# Проект на rollup

## Хронология разработки

## Задание #1
Вас посадили на проект, где вы являетесь главным разработчиком. Код еще никто не писал и поэтому ваша задача состоит в том, чтобы с пустой папки сделать базовую конфигурацию проекта.

Для этого используйте Rollup. Теперь в папке проекта создайте 3 файла: index.html, index.css и index.js. Добавьте в index.html базовую разметку HTML. После создайте файл package.json при помощи команды npm init -y. Также в index.js добавьте строчку кода:

console.log('Hello World!');
Теперь, руководствуясь документацией Rollup (ссылка) и текстовым уроком, установите rollup как пакет и создайте конфигурационный файл rollup.config.mjs. В rollup.config.mjs добавьте базовую конфигурацию для запуска проекта. Никаких плагинов пока не добавляйте.

После в файле package.json в раздел "scripts" добавьте команду:

"build": "rollup -c"
Затем запустите команду с помощью npm run build. У вас должен сгенерироваться JS-файл, название которого вы указывали в свойстве "output" в файле rollup.config.mjs. Если файл не сгенерировался, то, возможно, вы сделали что-то не так и у вас возникла ошибка. В данном случае вам нужно найти ее и исправить.

1. Инициируем проект и создаем package.json:

```sh
# из корня проекта/репозитория
npm init -y
```

2. Устанавливаем и проверяем сборщик

```shell
npm install --global rollup # может понадобится sudo
rollup --version
```

3. Конфигурируем rollup:

```sh
# из корня проекта
vim rollup.config.mjs
```

и добавляем базовую конфигурацию:

```mjs
export default {
	input: "./index.js",
	output: { file: "./dist/bundle.js", format: "cjs" },
};
```

4. Модифицируем свойство "script" файла конфигурации package.json для автоматизации сборки и запуска:

```json
...
	"scripts": {
		"build": "rollup -c",
	},
    ...
...
```

5. Тестируем проект:

```sh
npm run build
```

[commit задачи 1](https://github.com/Aberezhnoy1980/ResultUniversityCourse/commit/1e514ceb029259a8b4445ed535de84cdb2540056)

Вы молодец! Вы инициализировали проект. Но это еще не все, так как нужно еще учесть следующие вещи:

1. Подключение стилей
2. Работа с картинками
3. Поддержка кода другими браузерами
4. Запуск проекта на локальном сервере (localhost)

Поэтому сейчас вы этим и займетесь. Необходимо установить несколько плагинов в "devDependencies":

1. Для подключения стилей используйте «rollup-plugin-styles»: [ссылка](https://www.npmjs.com/package/rollup-plugin-styles)
2. Для работы с картинками «@rollup/plugin-image»: [ссылка](https://www.npmjs.com/package/@rollup/plugin-image)
3. Для того чтобы переводить JavaScript в код, который поддерживают даже старые браузеры, используйте «@rollup/plugin-babel»: [ссылка](https://www.npmjs.com/package/@rollup/plugin-babel) вместе с пресетом @babel/preset-env: [ссылка](https://babeljs.io/docs/babel-preset-env)
4. Для запуска проекта на локальном сервере вам понадобятся плагины «rollup-plugin-serve»: [ссылка](https://www.npmjs.com/package/rollup-plugin-serve) и «rollup-plugin-livereload»: [ссылка](https://www.npmjs.com/package/rollup-plugin-livereload)

После создайте папку assets и добавьте в нее любую картинку с изображением языка программирования JavaScript. Теперь в index.js файле вам необходимо добавить в DOM два элемента:

1. \<h1>. В данном элементе должна быть надпись: “I love JavaScript”
2. \<img>. Данный элемент должен отображать картинку из папки assets

Кроме этого, в index.css добавьте любые стили на свой вкус. Главное, чтобы данный файл не был пустым.

После в файл package.json добавьте еще один скрипт:

* `"start": "rollup -c -w”`

и запустите команду `npm run start` или просто (`npm start`). Также при помощи тега \<script> подключите сгенерированный Rollup JS-файл в index.html.

В итоге у вас должна отобразиться картинка, примениться все стили, и должен открыться локальный сервер. Если что-то пошло не так, то, возможно, у вас возникла ошибка. В данном случае вам нужно найти ее и исправить.

1. Подключаем стили:

```sh
npm i -D rollup-plugin-styles
```

Обновляем файл конфифгурации rollup (добавляем импорт и плагин):

```mjs
import styles from "rollup-plugin-styles";

export default {
	...,
	plugins: [styles()],
}
```

2. Плагин с картинками:

```sh
npm install @rollup/plugin-image --save-dev
```

Файл конфигурации rollup:

```mjs
...
import image from '@rollup/plugin-image';

export default {
	...,
	plugins: [..., image()],
}
```

3. Babel:

```sh
npm i -D @rollup/plugin-babel @babel/core @babel/preset-env @rollup/plugin-node-resolve
```

Файл конфигурации rollup:

```mjs
...
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
	...,
	plugins: [..., resolve(), babel({ babelHelpers: "bundled" })],
}
```

4. Server и livereload: 

```sh
npm i --D rollup-plugin-serve rollup-plugin-livereload
```

Итоговый файл конфигурации rollup:

```mjs
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
	input: "./index.js",
	output: { file: "./dist/bundle.js", format: "cjs" },
	plugins: [
		styles(),
		image(),
		resolve(),
		babel({ babelHelpers: "bundled" }),
		serve(),
		livereload(),
	],
};
```

1. Модифицируем свойство "script" файла конфигурации package.json для автоматизации сборки и запуска:

```json
...
	"scripts": {
		"start": "rollup -c -w",
		"build": "rollup -c"
	},
    ...
...
```

Проверка:

```sh
npm start
```
[commit задачи 2](https://github.com/Aberezhnoy1980/ResultUniversityCourse/commit/17f8fcc97587753e82ad72f076f01b9663df58b9)

Так как .gitignore фильтрует директорию для сборки `/dist`, сделаем дополнительный комит, в который попадт файлы сборки. Для этого изменим конфигуурацию rollup:

```mjs
...

export default {
	...,
	output: { file: "./target/bundle.js", format: "cjs" },
	...
};
```

Пересоберем проект и сделаем комит:

```sh
npm start
```

```sh
git add -A; git commit -am"added output bundle to the repo"; git push origin main
```
