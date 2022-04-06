import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Grid from '@mui/material/Grid';
import CreateUser from './pages/CreateUser';
import CreateBot from './pages/CreateBot';
import NavbarCustom from './components/NavbarCustom';
import PantallaPrincipal from './pages/Principal';
import Operations from './pages/Operations';
import ViewGraphic from './pages/ViewGraphic';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path="/" element={<MenuPrincipalBot />} />
            <Route path="login" element={<CreateUser />} />
            <Route path="bot" element={<CreateBot />} />
            <Route path="operations" element={<Operations />} />
            <Route path="Graphic" element={<ViewGraphic/>} />
          </Routes>
        </Grid>
      </Grid>
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
