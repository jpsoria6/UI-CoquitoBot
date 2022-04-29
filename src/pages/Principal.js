import React from 'react';
import BasicCard from '../components/CustomCard';
import '../index.css';
import MediaCard from '../components/ChartCard';
import Tabla from '../components/TableOperations';
import Grid from '@mui/material/Grid';
import NavbarCustom from '../components/NavbarCustom';


function PantallaPrincipal(){
    return (
        <div>
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
        <div>
            <div style={{margin:'10px'}}>
                <BasicCard/>
            </div>
            <div style={{margin:'10px'}}>
                <MediaCard/>   
            </div>
            <div>
                <h1>Operaciones Abiertas</h1>
                <Tabla/>
            </div>
        </div>
        </Grid>
      </Grid>
        </div>
    )
}

export default PantallaPrincipal;

