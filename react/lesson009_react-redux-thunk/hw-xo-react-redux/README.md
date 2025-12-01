# React-Redux

1. Установка зависисмостей:

```shell
npm install -D prop-types
```

```shell
npm install -D babel-plugin-check-prop-types
```

```shell
npm i react-redux redux
```

2. Настройка проекта:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";

  return {
    plugins: [
      react({
        babel: {
          plugins: isDev ? ["check-prop-types"] : [],
        },
      }),
    ],
  };
});
```
