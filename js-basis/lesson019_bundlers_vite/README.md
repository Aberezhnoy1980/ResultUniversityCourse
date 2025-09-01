# Проект vite

## Окружение

1. Scaffolding Your First Vite Project

```sh
npm create vite@latest
```

2. Инициализация проекта

```sh
cd /project_name && npm i
```

3. Конфигурация

```sh
# из корня проекта
vim vite.config.js
```
Например, создавая в корне страницы html, можно их собирать в bundle следующим образом:

```js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: resolve(__dirname, "about.html"),
				contacts: resolve(__dirname, "contacts.html"),
			},
		},
	},
});
```