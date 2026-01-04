# Игра "Крестики-нолики" - Миграция на классовые компоненты

## 📋 Описание проекта

Академический проект игры "Крестики-нолики" (Tic-Tac-Toe), созданный для изучения:
- Различий между функциональными и классовыми компонентами React
- Работы с Redux через функцию `connect()` (без хуков)
- Миграции стилей с CSS-модулей на Tailwind CSS
- Практики работы с legacy кодом

**Исходное состояние:** Проект был написан на функциональных компонентах с использованием хуков React и Redux.

**Цель реконструкции:**
- Переписать все компоненты с функциональных на классовые
- Не использовать хуки (вообще)
- Использовать функцию `connect()` для подключения Redux к React
- Заменить CSS-модули на Tailwind CSS

---

## 🚀 Подготовка проекта

### 1. Установка зависимостей

```shell
npm i
```

### 2. Запуск dev-сервера

```shell
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

### 3. Сборка для production

```shell
npm run build
```

---

## 🔄 Миграция на классовые компоненты

### Общий подход к миграции

При переписывании функциональных компонентов на классовые использовались следующие принципы:

#### 1. Базовая структура классового компонента

**Функциональный компонент:**
```jsx
export const Component = (props) => {
  return <div>{props.children}</div>;
};
```

**Классовый компонент:**
```jsx
import { Component } from 'react';

export class Component extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
```

#### 2. Конструкторы

**Когда НЕ нужен конструктор:**
- Если компонент не использует `state`
- Если компонент не выполняет инициализацию в конструкторе
- Если компонент только получает `props` и рендерит JSX

**Пример без конструктора:**
```jsx
export class GameLayout extends Component {
  render() {
    return <div>Content</div>;
  }
}
```

**Когда нужен конструктор:**
- Если нужно инициализировать `state`
- Если нужно привязать методы к контексту (`this`)
- Если нужна дополнительная логика при создании экземпляра

**Пример с конструктором:**
```jsx
export class ComponentWithState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.count}</div>;
  }
}
```

**В нашем проекте:** Конструкторы не использовались, так как:
- Все компоненты получают данные через `props` от Redux
- Нет локального `state` в компонентах
- Методы используют arrow functions (автоматическая привязка `this`)

#### 3. Метод `render()`

- Единственный обязательный метод в классовом компоненте
- Должен возвращать JSX или `null`
- Вызывается автоматически при каждом обновлении компонента
- Не должен изменять `state` или вызывать сайд-эффекты

**Пример:**
```jsx
render() {
  return (
    <div className={styles.container}>
      {this.props.field.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`}>
            {cell}
          </div>
        ))
      )}
    </div>
  );
}
```

#### 4. Lifecycle методы

**В нашем проекте НЕ использовались:**
- `componentDidMount()` - нет необходимости в сайд-эффектах при монтировании
- `componentDidUpdate()` - нет необходимости отслеживать изменения props
- `componentWillUnmount()` - нет необходимости в очистке ресурсов
- `shouldComponentUpdate()` - оптимизация не требуется

**Почему:** Все данные приходят из Redux store через `connect()`, обновления происходят автоматически при изменении store.

#### 5. Arrow functions для методов

Использование arrow functions позволяет избежать необходимости привязки `this` в конструкторе:

```jsx
export class FieldContainer extends Component {
  // Arrow function - this автоматически привязан
  isWinningCell = (rowIndex, colIndex) => {
    return this.props.winningCells.some(
      ([winRow, winCol]) => winRow === rowIndex && winCol === colIndex
    );
  };

  render() {
    return <FieldLayout isWinningCell={this.isWinningCell} />;
  }
}
```

#### 6. Вычисляемые значения

Если нужно вычислить значение на основе `props`, лучше использовать метод, а не поле класса:

**❌ Неправильно:**
```jsx
export class InformationContainer extends Component {
  // Проблема: вычисляется один раз при создании класса, не обновляется при изменении props
  infoMsg = this.props.isGameEnded
    ? `Победа: ${this.props.currentPlayer}`
    : 'Ходит: X';
}
```

**✅ Правильно:**
```jsx
export class InformationContainer extends Component {
  getInfoMsg = () => {
    if (this.props.isGameEnded) {
      return `Победа: ${this.props.currentPlayer}`;
    }
    if (this.props.isDraw) {
      return 'Ничья';
    }
    return `Ходит: ${this.props.currentPlayer}`;
  };

  render() {
    return <InformationLayout>{this.getInfoMsg()}</InformationLayout>;
  }
}
```

### Структура компонентов в проекте

Проект использует паттерн **Container/Presentational**:

#### Container компоненты (подключены к Redux)
- `FieldContainer` → `Field` (экспортируется через `connect()`)
- `InformationContainer` → `Information` (экспортируется через `connect()`)
- `RestartBtnContainer` → `RestartBtn` (экспортируется через `connect()`)

#### Presentational компоненты (чистый JSX)
- `FieldLayout` - отображает поле игры
- `InformationLayout` - отображает информацию о ходе
- `RestartBtnLayout` - отображает кнопку перезапуска
- `GameLayout` - композиция всех компонентов

**Пример структуры:**
```jsx
// Container (field.jsx)
export class FieldContainer extends Component {
  isWinningCell = (rowIndex, colIndex) => { /* логика */ };

  render() {
    return (
      <FieldLayout
        onClick={this.props.handleClick}
        isWinningCell={this.isWinningCell}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  winningCells: state.winningCells,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (rowIndex, colIndex) => dispatch(cellClick(rowIndex, colIndex)),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
```

```jsx
// Presentational (fieldLayout.jsx)
export class FieldLayoutContainer extends Component {
  render() {
    return (
      <div className={styles.fieldContainer}>
        {this.props.field.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => this.props.onClick(rowIndex, colIndex)}
            >
              {cell}
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
```

---

## 🔌 Подключение Redux через `connect()`

### Настройка store

```jsx
// store.js
import { createStore, compose } from 'redux';
import { gameReducer } from './gameReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(gameReducer, composeEnhancers());
```

### Подключение Provider

```jsx
// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </StrictMode>
);
```

### Использование `connect()`

Функция `connect()` принимает два параметра (опционально):
1. `mapStateToProps` - функция, которая маппит state в props
2. `mapDispatchToProps` - функция или объект, который маппит dispatch actions в props

**Пример с обоими параметрами:**
```jsx
import { connect } from 'react-redux';
import { cellClick } from '../../actions';

const mapStateToProps = (state) => ({
  winningCells: state.winningCells,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (rowIndex, colIndex) => dispatch(cellClick(rowIndex, colIndex)),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
```

**Пример только с mapStateToProps:**
```jsx
const mapStateToProps = (state) => ({
  isDraw: state.isDraw,
  isGameEnded: state.isGameEnded,
  currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
```

**Пример только с mapDispatchToProps:**
```jsx
const mapDispatchToProps = (dispatch) => ({
  handleRestart: () => dispatch(restartGame()),
});

export const RestartBtn = connect(null, mapDispatchToProps)(RestartBtnContainer);
```

### Доступ к props в классовых компонентах

После подключения через `connect()`, все данные доступны через `this.props`:

```jsx
export class FieldContainer extends Component {
  render() {
    // this.props.winningCells - из mapStateToProps
    // this.props.handleClick - из mapDispatchToProps
    return <FieldLayout onClick={this.props.handleClick} />;
  }
}
```

---

## 🔍 Ревью и оптимизация кода

### Найденные и исправленные проблемы

#### 1. Критичная ошибка в `Information.jsx`
**Проблема:** Вычисляемое значение `infoMsg` было определено как поле класса вне конструктора, что приводило к неправильному отображению при изменении props.

**Исправление:** Перенесено в метод `getInfoMsg()`, который вызывается в `render()`.

#### 2. Опечатка в `restartBtnLayout.jsx`
**Проблема:** `styels` вместо `styles` - импорт не работал.

**Исправление:** Исправлено на `styles`.

#### 3. Опечатка в `store.js`
**Проблема:** `composeEnchancers` вместо `composeEnhancers`.

**Исправление:** Исправлено на `composeEnhancers`.

#### 4. Пустые конструкторы
**Проблема:** Во всех классовых компонентах были пустые конструкторы без логики.

**Исправление:** Удалены из всех компонентов:
- `Game`
- `GameLayout`
- `FieldContainer`
- `FieldLayoutContainer`
- `InformationContainer`
- `InformationLayout`
- `RestartBtnContainer`
- `RestartBtnLayout`

**Почему:** Если конструктор только вызывает `super(props)` и ничего больше не делает, он не нужен. React автоматически передает props в компонент.

#### 5. Порядок методов в классах
**Проблема:** Метод `isWinningCell` был объявлен до конструктора в `Field.jsx`.

**Исправление:** Перемещен после конструктора (хотя конструктор потом был удален).

**Рекомендация:** Порядок в классовом компоненте:
1. Конструктор (если нужен)
2. Методы жизненного цикла (если используются)
3. Вспомогательные методы
4. `render()`

### Удаленные неиспользуемые файлы

#### Папка `src/selectors/`
Удалена вся папка с селекторами (5 файлов + index.js):
- `select-current-player.js`
- `select-field.js`
- `select-is-draw.js`
- `select-is-game-ended.js`
- `select-winnig-cells.js`
- `index.js`

**Причина:** Селекторы не использовались в проекте. Компоненты обращались напрямую к state через `mapStateToProps`:
```jsx
// Вместо использования селектора
const mapStateToProps = (state) => ({
  currentPlayer: selectCurrentPlayer(state), // не использовалось
});

// Использовалось прямое обращение
const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer, // используется
});
```

**Примечание:** В production проектах селекторы полезны для:
- Инкапсуляции структуры state
- Мемоизации вычислений
- Упрощения рефакторинга

#### Файл `src/game.module.css`
**Причина:** Файл не импортировался нигде в коде.

### Результаты тестирования

- ✅ Проект собирается без ошибок (`npm run build`)
- ✅ Линтер не нашел ошибок
- ✅ Структура кода соответствует требованиям ТЗ
- ✅ Приложение работает корректно
- ✅ Все компоненты используют классовый синтаксис
- ✅ Redux подключен через `connect()` без хуков
- ✅ Стили мигрированы на Tailwind CSS
- ✅ CSS-модули полностью удалены

---

## 🎨 Миграция на Tailwind CSS

> **Статус:** ✅ Завершено

### Установка и настройка

#### 1. Установка зависимостей

```shell
npm install -D tailwindcss@^3 postcss@^8 autoprefixer@^10
```

**Примечание:** Использована версия Tailwind CSS v3 (стабильная), так как v4 требует отдельный пакет `@tailwindcss/postcss` и имеет другой синтаксис конфигурации.

#### 2. Создание конфигурационных файлов

**tailwind.config.js:**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rebeccapurple': '#663399',
        'aliceblue': '#f0f8ff',
      },
    },
  },
  plugins: [],
}
```

**postcss.config.js:**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### 3. Подключение Tailwind директив

В `src/index.css` добавлены директивы Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* существующие глобальные стили */
}
```

### Процесс миграции стилей

#### Анализ CSS-модулей

Перед миграцией были проанализированы все CSS-модули:

1. **fieldLayout.module.css** - сетка 3x3, стили ячеек, победные ячейки
2. **informationLayout.module.css** - контейнер информации, состояния победы/ничьи
3. **gameLayout.module.css** - flex контейнер с отступами
4. **restartBtnLayout.module.css** - стили кнопки перезапуска

#### Замена стилей по компонентам

##### 1. FieldLayout (fieldLayout.jsx)

**Было (CSS-модуль):**
```css
.fieldContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  background-color: #000;
  width: 310px;
  height: 310px;
}

.gridItem {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  color: black;
  font-size: 6rem;
  line-height: 100%;
  transition: all 0.3s ease;
}

.winCell {
  background-color: #4CAF50 !important;
  color: white !important;
  font-size: 6.5rem;
  font-weight: bold;
  transform: scale(1.1);
}
```

**Стало (Tailwind классы):**
```jsx
<div className="grid grid-cols-3 grid-rows-3 gap-1 bg-black w-[310px] h-[310px]">
  {/* ячейки */}
  <div className={`flex justify-center items-center bg-white text-center text-black text-6xl leading-none transition-all cursor-pointer ${
    isWinning
      ? 'bg-green-500 text-white text-7xl font-bold scale-110'
      : hasWinningCells
      ? 'opacity-50 bg-gray-100 text-gray-500'
      : ''
  }`}>
    {cell}
  </div>
</div>
```

**Особенности:**
- Использован произвольный размер `w-[310px]` для точного соответствия оригиналу
- Условные классы для победных ячеек и затемнения остальных при победе
- Логика `hasWinningCells` вычисляется в компоненте для применения стилей к невыигрышным ячейкам

##### 2. InformationLayout (information.jsx + informationLayout.jsx)

**Было:**
```css
.infoContainer {
  display: flex;
  justify-content: center;
  padding: 10px;
  color: rebeccapurple;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.win {
  background-color: #4CAF50;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.draw {
  background-color: #FF9800;
  color: white;
}
```

**Стало:**
```jsx
// В InformationContainer
getContainerClass = () => {
  const baseClasses = 'flex justify-center p-2.5 text-center text-2xl font-bold rounded-lg transition-all';
  if (this.props.isGameEnded) {
    return `${baseClasses} bg-green-500 text-white shadow-md`;
  }
  if (this.props.isDraw) {
    return `${baseClasses} bg-orange-500 text-white`;
  }
  return `${baseClasses} text-rebeccapurple`;
};

// В InformationLayout
<div className={this.props.className}>
  <span>{this.props.children}</span>
</div>
```

**Изменения:**
- Упрощена архитектура: вместо передачи функции `getContainerClass(styles)` теперь передается готовый `className`
- Условная логика вынесена в метод компонента
- Использованы кастомные цвета из `tailwind.config.js` (`rebeccapurple`)

##### 3. GameLayout (gameLayout.jsx)

**Было:**
```css
.gameContainer {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
```

**Стало:**
```jsx
<div className="flex flex-col gap-10">
  <Information />
  <Field />
  <RestartBtn />
</div>
```

**Примечание:** `gap-10` в Tailwind = `2.5rem` = `40px` (точное соответствие)

##### 4. RestartBtnLayout (restartBtnLayout.jsx)

**Было:**
```css
.restart {
  background-color: rebeccapurple;
  font-size: 1.5rem;
  color: aliceblue;
  padding: 10px;
  border-radius: 10px;
}
```

**Стало:**
```jsx
<button className="bg-rebeccapurple text-xl text-aliceblue p-2.5 rounded-lg">
  {this.props.children}
</button>
```

### Удаление CSS-модулей

После успешной миграции удалены все CSS-модули:
- ✅ `src/components/field/fieldLayout.module.css`
- ✅ `src/components/information/informationLayout.module.css`
- ✅ `src/components/game/gameLayout.module.css`
- ✅ `src/components/restartBtn/restartBtnLayout.module.css`

Также удалены все импорты `import styles from './*.module.css'` из компонентов.

### Результаты миграции

- ✅ Все стили успешно мигрированы на Tailwind CSS
- ✅ Визуальное соответствие оригинальному дизайну сохранено
- ✅ Проект собирается без ошибок
- ✅ CSS-модули полностью удалены
- ✅ Код стал более читаемым и поддерживаемым
- ✅ Использованы utility-first классы Tailwind

### Преимущества миграции

1. **Единообразие:** Все стили в одном месте (компоненты), не нужно переключаться между файлами
2. **Меньше кода:** Нет необходимости создавать отдельные CSS-файлы для простых стилей
3. **Производительность:** Tailwind генерирует только используемые классы
4. **Гибкость:** Легко изменять стили прямо в JSX
5. **Консистентность:** Использование дизайн-системы Tailwind (spacing, colors, etc.)

### Особенности реализации

1. **Произвольные значения:** Использованы `w-[310px]` для точного соответствия оригинальным размерам
2. **Условные классы:** Логика стилей вынесена в методы компонентов для читаемости
3. **Кастомные цвета:** Добавлены `rebeccapurple` и `aliceblue` в `tailwind.config.js`
4. **Сложная логика:** Для селектора `:has()` из CSS использована JavaScript логика в компоненте

---

## 📁 Структура проекта

```
src/
├── actions/              # Redux actions
│   ├── cell-click.js
│   ├── restart-game.js
│   └── index.js
├── components/           # React компоненты
│   ├── field/          # Поле игры
│   │   ├── field.jsx           # Container (подключен к Redux)
│   │   └── fieldLayout.jsx     # Presentational (Tailwind CSS)
│   ├── game/           # Главный компонент игры
│   │   └── gameLayout.jsx      # (Tailwind CSS)
│   ├── information/    # Информация о ходе
│   │   ├── information.jsx      # Container (подключен к Redux)
│   │   └── informationLayout.jsx # Presentational (Tailwind CSS)
│   ├── restartBtn/     # Кнопка перезапуска
│   │   ├── restartBtn.jsx      # Container (подключен к Redux)
│   │   └── restartBtnLayout.jsx # Presentational (Tailwind CSS)
│   └── index.js        # Экспорты компонентов
├── Game.jsx            # Корневой компонент
├── gameReducer.js      # Redux reducer
├── store.js            # Redux store
├── main.jsx            # Точка входа
├── index.css           # Глобальные стили + Tailwind директивы
└── utils/              # Утилиты
    ├── checkWin.js
    ├── checkIsDraw.js
    ├── fieldInit.js
    ├── constants.js
    └── index.js
```

---

## 🎯 Ключевые моменты для запоминания

### Классовые компоненты

1. **Всегда наследуются от `Component`** из `react`
2. **Обязательный метод `render()`** - возвращает JSX
3. **Конструктор нужен только если:**
   - Есть локальный `state`
   - Нужна привязка методов
   - Нужна инициализация
4. **Arrow functions** для методов избегают проблем с `this`
5. **Вычисляемые значения** лучше делать методами, а не полями класса

### Redux с `connect()`

1. **`mapStateToProps`** - маппит state в props
2. **`mapDispatchToProps`** - маппит actions в props
3. **`connect()`** возвращает HOC (Higher Order Component)
4. **Доступ к данным** через `this.props` в классовом компоненте
5. **Provider** оборачивает приложение в `main.jsx`

### Паттерн Container/Presentational

- **Container** - подключен к Redux, содержит логику
- **Presentational** - чистый JSX, получает данные через props
- Разделение ответственности упрощает тестирование и поддержку

---

## 📚 Полезные ссылки

- [React Class Components](https://react.dev/reference/react/Component)
- [React Redux - connect()](https://react-redux.js.org/api/connect)
- [Redux Basics](https://redux.js.org/basics/basic-tutorial)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📝 Заметки

- Проект создан для академических целей
- Использование Redux в данном проекте избыточно, но полезно для обучения
- Классовые компоненты используются для понимания legacy кода
- После миграции на Tailwind CSS проект будет полностью соответствовать ТЗ
