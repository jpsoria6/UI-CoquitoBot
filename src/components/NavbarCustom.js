import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import { Container,Typography,Divider,ButtonGroup } from '@mui/material';
import ButtonBorderless from './ButtonBorderless';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';

function NavbarCustom(){

    const navigate = useNavigate();
    const [username,setUsername] = useState('')
    const cerrarSesion = () => {
        sessionStorage.clear()
        navigate("/");
    }
    useEffect(()=>{
        setUsername(sessionStorage.getItem('userName'))
    },[])

    return(
        <Grid container 
            spacing={2}
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{width:"20vw", marginTop:'10vh'}}>
            <Container>
                <Icon component={AccountCircleIcon}></Icon>
                <Typography variant="h6" 
                gutterBottom 
                component="div" 
                sx={{alignSelf:"center", alignContent:"center"}}>
                    {username} 
                </Typography>
            </Container>
            <Divider style={{width:'90%'}} />
            <Container style={{width:'100%'}}>
                <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                sx={{width:'100%'}}
                >
                    <Link to='/menuPrincipal'>
                    <ButtonBorderless icon={<DashboardIcon/>} label='Inicio'></ButtonBorderless>
                    </Link>
                    <Link to='/operations'>
                        <ButtonBorderless icon={<CandlestickChartIcon/>} label='Operaciones'></ButtonBorderless>
                    </Link>
                    <Link to='/History'>
                        <ButtonBorderless icon={<HistoryIcon/> } label='Historial'></ButtonBorderless>
                    </Link>
                    <Link to='/MyAccount'>
                        <ButtonBorderless icon={<PersonIcon/>} label='Mi Cuenta'></ButtonBorderless>
                    </Link>
                    <Link to='/VerBots'>
                        <ButtonBorderless icon={<AdbIcon/>} label='Ver mis Bots'></ButtonBorderless>
                    </Link>
                    <ButtonBorderless icon={<CloseIcon/>} onClick={e=>cerrarSesion()} label='Cerrar Sesion'></ButtonBorderless>
                    
                </ButtonGroup>
            </Container>
            <Divider style={{width:'90%'}} />
        </Grid>

    )
}


export default NavbarCustom