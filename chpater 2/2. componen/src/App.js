import './App.css';
import { Welcome } from './komponen/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome children="Welome 1" />
      <Welcome children="welcome 2" />
      <Welcome>Selamat datang di welcome</Welcome>
    </div>
  );
}

export default App;
