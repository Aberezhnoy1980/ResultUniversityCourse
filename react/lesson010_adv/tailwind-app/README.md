# [Tailwind css](https://tailwindcss.com/)

## [Подключение](https://tailwindcss.com/docs/installation/using-vite)

## Пользовательские стили

В файле css, который подключен к компоненту и содержит директиву @import "tailwindcss"

```js
@layer components {
	.circle-red {
		@apply m-auto;
		width: 100px;
		height: 100px;
		background-color: red;
		border-radius: 50%;
	}
```
