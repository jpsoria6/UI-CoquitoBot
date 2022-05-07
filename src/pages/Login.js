import React,{useEffect, useState} from 'react';
import CreateUser from './CreateUser'
import '../styles/styleLogin.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import {enviroment} from '../enviroment'


function Login({onLogin}){
    // const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    // const container = document.getElementById('container');
    const [UserName,setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    // useEffect(()=>{
    //   postLogin('facundo','2019')
    // },[])
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

    // Evento para abrir form de registro
    // signUpButton.addEventListener('click', () =>
    //   container.classList.add('right-panel-active')
    // );
    
    // // Evento para regresar al form de iniciar sesión
    // signInButton.addEventListener('click', () =>
    //   container.classList.remove('right-panel-active')
    // );
    return(
        <div class="container clasbody" id="container">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>Crea tu Cuenta</h1>
          <CreateUser/>
        </form>
      </div>
      <div class="form-container sign-in-container">
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
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>¡Bienvenido!</h1>
            <p>
              Inicia sesión con tu cuenta
            </p>
            <button class="ghost" id="signIn">Inicia sesión</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hola!!!</h1>
            <p>Crear tu cuenta</p>
            <button class="ghost" id="signUp" >Registrar</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;