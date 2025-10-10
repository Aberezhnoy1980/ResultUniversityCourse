# Работа с формами

## Для работы с Select можно использовать пакет [react-select](https://react-select.com/home)

```shell
npm i --save react-select
```

Затем импортировать из пакета компонент Select и использовать его вместо обычного тега

## Для автоматизации валидации форм используем [yup](https://www.npmjs.com/package/yup)

```shell
npm i yup
```

Далее, в простом случае, создаем схемы валидации и используем метод validate(validateSync)

## Для организации сразу всей формы есть пакет [react-hook-form](https://www.npmjs.com/package/react-hook-form)

```shell
npm i react-hook-form
```

Возможности react-hook-form можно изучить [здесь](https://react-hook-form.com/)

Также можно совместно с react-hook-form использовать yup, для чего необходимо установить yupResolver:

```shell
npm install @hookform/resolvers yup
```
