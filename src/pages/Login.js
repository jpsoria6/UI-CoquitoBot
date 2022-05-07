import React,{useEffect, useState} from 'react';
import CreateUser from './CreateUser'
import '../styles/styleLogin.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import {enviroment} from '../enviroment'


function Login({onLogin}){
    const [UserName,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rightPanelActive, setRightPanelActive] = useState(false)
    
    async function postLogin(){
      let params = {
        UserName,
        password
      }
      axios.post(enviroment.urlBaseBack+'/Login', {params})
      .then((res)=>{
        if(res){
          return console.log(res)
        }
        return false
      })
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
          <input type="email" placeholder="Usuario" value={UserName} onChange={e=> {setUserName(e.target.UserName)}}/>
          <input type="password" placeholder="Password" value={password} onChange={e => {setPassword(e.target.password)}} />
          <a href="#">Olvidaste tu contraseña?</a>
          <Link to="/menuPrincipal">
             <button type='button' onClick={() => {postLogin()}}>Iniciar sesión</button>          
          </Link>
          
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
            <h1>Hola!!!</h1>
            <p>Crear tu cuenta</p>
            <button className={`ghost`} onClick={e => setRightPanelActive(true)} >Registrar</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;