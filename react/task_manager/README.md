# Приложение для управления домашней страницей репозитория github pages

Для одного репозитория можно создать одну страницу github pages, однако можно вкладывать в корневую директорию ветки для развертывания (по умолчанию gh-pages) другие проекты со статическим контентом. И в таком случае url'ы для сайтов github pages будут выглядеть следующим образом, например, структура проекта такая:

MyProject

    |
    |_________index..html
    |
    |___Site1
    |     |___index.html
    |
    |___Site2
          |___index.html

В таком случае основная страница репозитория 👇

```url
https://account_name.github.io/MyProject/
```

а вложенные страницы 👇

```url
https://account_name.github.io/MyProject/Site1
```

и

```url
https://account_name.github.io/MyProject/Site2
```

соответственно.

В основном, проекты в репозитории представлены сборками <em style="color: #EB5757;">vite + react</em>, при этом удобно использовать <em style="color: #EB5757;">npm</em> пакет [gh-pages](https://www.npmjs.com/package/gh-pages) для автоматизации развертывания.

### Исходя из этого, общий flow для развертывания сайтов такой:

* В каждый проект утсанавливается dev зависимость [gh-pages](https://www.npmjs.com/package/gh-pages)

```shell
npm i -D gh-pages
```

* Данное приложение развертывается в корневую директорию ветки для deploy, потому конфигурация следующая:
	* <em style="color: #EB5757;">vite.config.js</em>
	```js
	import { defineConfig } from 'vite';
	import react from '@vitejs/plugin-react-swc';

	// https://vite.dev/config/
	export default defineConfig({
		plugins: [react()],
		base: './',
	});
	```
	* <em style="color: #EB5757;">package.json</em> (добаввляем скрипт запуска):
    ```json
	"deploy": "gh-pages -d dist -v \"**/.*\""
	```
	где:

	\- <em style="color: #EB5757;">dist</em> название директории с выходным бандлом (дистрибутив). В случае конфликта с <em style="color: #EB5757;">.gitignore</em> можно конфигурировать настройки сборщика (в случае с vite <em style="color: #EB5757;">vite.config.js</em>) или паттерны <em style="color: #EB5757;">.gitignore</em>

	\- <em style="color: #EB5757;">--v \"**/.*\"</em> удаление из директории репозиотрия для развертывания точечных файлов. При определенных обстоятельствах этот флаг необходимо убирать. Что странно, данный ключ позволяет решить проблему, при которой gf-pages не обходит вложенную в dist директорию с артефактами assets.

* Для вложенных приложений, в скрипте развертывания необходимо указывать имя диркетории, которая будет создаваться в ветке для развертывания относительно корня:
  * <em style="color: #EB5757;">package.json</em>:
  ```json
  "deploy": "gh-pages -d dist -e current_task -v \"**/.*\""
  ```
