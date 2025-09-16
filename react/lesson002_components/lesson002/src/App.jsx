import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import { MyComponent } from './MyComponent';
import { MyNewComponent } from './MyNewComponent';
import { MyStateComponent } from './MyStateComponent';
import { MyStateComponent2 } from './MyStateComponent2';
import { MyImmutComponent } from './MyImmutComponent';
import { MyListComponent } from './MyListComponent';
import { MyEventComponent } from './MyEventComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
	  <MyComponent />
	  <MyNewComponent />
	  <MyStateComponent />
	  <MyStateComponent2 />
	  <MyStateComponent2 />
	  <MyStateComponent2 />
	  <MyImmutComponent />
	  <MyListComponent />
	  <MyEventComponent />
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
