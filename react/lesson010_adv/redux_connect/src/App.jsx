import { User, ControlPanel } from "./components";
import reduxThunk from "./assets/main_scheme.png";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.app}>
			<img src={reduxThunk} alt="react-redux-scheme" />
			<User />
			<ControlPanel />
		</div>
	);
}

export default App;
