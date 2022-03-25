import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PasswordInput from '../components/PasswordInput';
import Grid from '@mui/material/Grid';
import { FormGroup,Checkbox,FormControlLabel } from '@mui/material';

function CreateUser(){
 
    const [nickname,setNickname] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")

    return (
        <Grid
        container
        columnSpacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <TextField sx={{ m: 1, width: '50ch' }} id="nickname" label="Nickname" variant="outlined" value={nickname} onChange={e=>{setNickname(e.target.value)}}/>
            <TextField sx={{ m: 1, width: '50ch' }} id="email" label="Email" variant="outlined" value={email} onChange={e =>{setEmail(e.target.value)}}/>
            <TextField sx={{ m: 1, width: '50ch' }} id="phone" label="Phone" variant="outlined" value={phone} onChange={e => {setPhone(e.target.value)}}/>
            <PasswordInput label="Password" width="50ch"></PasswordInput>
            <PasswordInput label="Confirm password" width="50ch"></PasswordInput>
            <FormGroup edgeStart sx={{m:1}}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Send notification by Email" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Send notification by Whatsapp" />
            </FormGroup>
            <Button variant="contained" size='large'>Register</Button>
        </Grid>
    )


}

export default CreateUser
