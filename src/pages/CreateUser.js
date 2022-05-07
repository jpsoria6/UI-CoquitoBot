import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PasswordInput from '../components/PasswordInput';
import Grid from '@mui/material/Grid';
import { FormGroup,Checkbox,FormControlLabel } from '@mui/material';
import { Link } from "react-router-dom";
import axios from 'axios';
import { enviroment } from '../enviroment';

function CreateUser(){
 
    const [userName,setUserName] = useState("")
    const [userEmail,setEmail] = useState("")
    const [userPhone,setPhone] = useState("")
    const [userPassword,setPassword] = useState("")
    const [notificationByEmail, setnotificationByEmail] = useState(true)
    const [notificationByWhatsapp, setnotificationByWhatsapp] = useState(true)

    async function postAccount(){
        let params = {
          userName,
          userPassword : '1234',
          userPhone,
          userEmail,
          notificationByEmail,
          notificationByWhatsapp
        }
        axios.post(enviroment.urlBaseBack + '/Account', params)
        .then((res)=>{
          if(res){
            return console.log(res)
          }
          return false
        })
      }
    return (
        <Grid
        container
        columnSpacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <TextField sx={{ m: 1, width: '50ch' }} id="nickname" label="UserName" variant="outlined" onChange={e=>{setUserName(e.target.value)}}/>
            <TextField sx={{ m: 1, width: '50ch' }} id="email" label="Email" variant="outlined" onChange={e =>{setEmail(e.target.value)}}/>
            <TextField sx={{ m: 1, width: '50ch' }} id="phone" label="Phone" variant="outlined" onChange={e => {setPhone(e.target.value)}}/>
            <PasswordInput label="Password" width="50ch"></PasswordInput>
            <PasswordInput label="Confirm password" width="50ch"></PasswordInput>
            <FormGroup edgeStart sx={{m:1}}>
                <FormControlLabel control={<Checkbox defaultChecked onChange={()=> setnotificationByEmail()}/>} label="Send notification by Email" />
                <FormControlLabel control={<Checkbox defaultChecked onChange={()=> setnotificationByWhatsapp()} />} label="Send notification by Whatsapp" />
            </FormGroup>
                <Button variant="contained" size='large' onClick={()=>{postAccount()}}>Register</Button>
        </Grid>
    )


}

export default CreateUser
