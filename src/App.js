import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Grid from '@mui/material/Grid';
import CreateUser from './pages/CreateUser';
import CreateBot from './pages/CreateBot';
import NavbarCustom from './components/NavbarCustom';
import PantallaPrincipal from './pages/Principal';
import Operations from './pages/Operations';
import ViewGraphic from './pages/ViewGraphic';
import History from './pages/History';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">

          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/menuPrincipal" element={<MenuPrincipalBot />} />
            <Route path="createUser" element={<CreateUser />} />
            <Route path="/bot" element={<CreateBot />} />
            <Route path="operations" element={<Operations />} />
            <Route path="History" element={<History/>} />
            <Route path="Graphic" element={<ViewGraphic/>} />
          </Routes>
      {/* <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
          <Routes>
            <Route path="/menuPrincipal" element={<MenuPrincipalBot />} />
            <Route path="createUser" element={<CreateUser />} />
            <Route path="bot" element={<CreateBot />} />
            <Route path="operations" element={<Operations />} />
            <Route path="History" element={<History/>} />
            <Route path="Graphic" element={<ViewGraphic/>} />
          </Routes>
        </Grid>
      </Grid> */}
    </div>
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
