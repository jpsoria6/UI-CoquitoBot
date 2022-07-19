import React,{useState} from 'react';
import CreateUser from './CreateUser'
import '../styles/styleLogin.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import {enviroment} from '../enviroment'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Login(){
  const navigate = useNavigate();
  const [UserName,setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rightPanelActive, setRightPanelActive] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
    
    async function postLogin(){
      let params = {
        UserName,
        password
      }
      axios.post(enviroment.urlBaseBack+'/Login', params)
      .then((res)=>{
        console.log('ver res: ', res)
        if(res){
          sessionStorage.clear()
          sessionStorage.setItem('userId',res.data.userID)
          sessionStorage.setItem('userName',res.data.userName)
          sessionStorage.setItem('userEmail',res.data.userEmail)
          navigate("./menuPrincipal")
          return console.log('respuesta es ', res.status)
        }
        return false
      }).catch((res) => {
        console.log('ver respuesta ', res)
        handleOpen()
      })
    }
      
    const handleClick = () => {
     postLogin()
    }

    return(
        <div className={`container clasbody ${rightPanelActive ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Crea tu Cuenta</h1>
          <CreateUser/>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Iniciar Sesión</h1>
          <span>Usuario</span>
          <input type="email" placeholder="Usuario" value={UserName} onChange={e=> {setUserName(e.target.value)}}/>
          <input type="password" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}} />
          <a href="#">Olvidaste tu contraseña?</a>
            {/* <Link to='/menuPrincipal'> */}
             <button type='button' onClick={()=> handleClick()}>Iniciar sesión</button>
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
             <Box sx={style}>
                <h1> Contraseña-Usuario incorrecto</h1>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Por favor vuelva a ingresar su contraseña y Usuario
                </Typography>
                  <Button onClick={()=>handleClose()} style={{margin:'5px'}} variant="contained" color="primary"> Aceptar </Button>
                
                </Box>
            </Modal>     
            {/* </Link> */}
         
          
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Bienvenido!</h1>
            <p>
              Inicia sesión con tu cuenta
            </p>
            <button className="ghost" onClick={e => setRightPanelActive(false)} id="signIn">Inicia sesión</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>¡¡Hola!!!</h1>
            <p>Crear tu cuenta</p>
            <button className={`ghost`} onClick={e => setRightPanelActive(true)} >Registrar</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;