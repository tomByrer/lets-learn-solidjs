import Counter from './Counter.jsx';
import Schedule from './Schedule.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <h1>SolidJS App</h1>
      <Counter />
      <Schedule />
    </div>
  );
}

export default App;
