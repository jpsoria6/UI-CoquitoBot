import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CreateUser from './pages/CreateUser';
import CreateBot from './pages/CreateBot';
import Dashboard from './components/Dashboard';
import PantallaPrincipal from './pages/Principal';
import Operations from './pages/Operations';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<MenuPrincipalBot />} />
        <Route path="login" element={<CreateUser />} />
        <Route path="bot" element={<CreateBot />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="operations" element={<Operations />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/bot">Bot</Link>
        <br></br>
        <Link to="/dashboard">Dashboard</Link>
        <br></br>
        <Link to="/operations">Operations</Link>
      </nav>
    </>
  );
}

function MenuPrincipalBot() {
  return (
   <div>
      <PantallaPrincipal/>
   </div>
  );
}

export default App;
