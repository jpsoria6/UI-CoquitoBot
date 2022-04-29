import React from 'react';
import '../index.css';
import Grafico from '../components/Grafico'
import GraficoDaily from '../components/GraphicDailyOp';
import GraficoOperations from '../components/GraphicOperations';
import Grid from '@mui/material/Grid';
import NavbarCustom from '../components/NavbarCustom';


function ViewGraphic(){
    return (
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
        <div style={{margin:'5px'}}>
            <h1> Monthly ROE </h1>
            <div style={{margin:'10px'}}>
                <Grafico></Grafico>
            </div>
            <h1> Daily Operations </h1>
            <div style={{margin:'10px'}}>
                <GraficoDaily></GraficoDaily>
            </div>
            <h1> Operations Complete </h1>
            <div style={{margin:'10px'}}>
                <GraficoOperations></GraficoOperations>
            </div>
        </div>
        </Grid>
      </Grid>
    )
}

export default ViewGraphic;