import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import About from './page/About';


function App() {
  return (
    <div className="App" >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
