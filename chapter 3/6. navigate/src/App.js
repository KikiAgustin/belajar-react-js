import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import AboutTeam from './page/AboutTeam';
import Blog from './page/Blog';
import BlogDetail from './page/BlogDetail';
import NotFound from './page/NotFound';
import Login from './page/Login';
import Dashboard from './page/Dashboard';

function App() {
  return (
    <div className="App" >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} >
          <Route path="team" element={<AboutTeam />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
