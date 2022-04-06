import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import { Container,Typography,Divider,ButtonGroup } from '@mui/material';
import ButtonBorderless from './ButtonBorderless';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";


function NavbarCustom(){


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
                    Guzman Facundo 
                </Typography>
            </Container>
            <Divider style={{width:'90%'}} />
            <Container style={{width:'100%'}}>
                <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                sx={{width:'100%'}}
                >
                    <Link to='/'>
                    <ButtonBorderless icon={<DashboardIcon/>} label='Dashboard'></ButtonBorderless>
                    </Link>
                    <Link to='/operations'>
                        <ButtonBorderless icon={<CandlestickChartIcon/>} label='Operations'></ButtonBorderless>
                    </Link>
                    <Link to='History'>
                        <ButtonBorderless icon={<HistoryIcon/> } label='History'></ButtonBorderless>
                    </Link>
                    <ButtonBorderless icon={<PersonIcon/>} label='My Account'></ButtonBorderless>
                </ButtonGroup>
            </Container>
            <Divider style={{width:'90%'}} />
        </Grid>

    )
}


export default NavbarCustom