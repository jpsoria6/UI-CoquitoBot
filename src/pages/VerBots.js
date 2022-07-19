import Grid from '@mui/material/Grid';
import NavbarCustom from '../components/NavbarCustom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import {enviroment} from '../enviroment'
import React, { useState,useEffect } from 'react';
import { Button } from '@mui/material';



const VerBots = () => {

    const riskPlans = [
        { "value" : 1,"text" : "LOW" },
        { "value" : 2,"text" : "MEDIUM" },
        { "value" : 3,"text" : "HIGH" },
    ]

    const columnsName = [
        { field: 'userNickname', headerName: 'Bot usado', width: 150, flex:1 },
        { field: 'initialTradingAmount', headerName: 'Monto a tradear', width: 130, flex:1 },
        { field: 'riskType', headerName: 'Tipo de riesgo', width: 70, flex:1 },
        { field: 'botonPausa', headerName: 'Pausar Bot', width: 70, flex:1},
    ]

    const [operations,setOperations] = useState([])
    
    useEffect(() => {
        let params = {
            userId : sessionStorage.getItem('userId')
        }
        axios.get(enviroment.urlBaseBack+'/Bot', {params})
        .then((res)=>{
         
          let finalRows = res.data.map(r => (
            {
                id: r.binanceApikey,
                userNickname: r.userNickname,
                initialTradingAmount: r.initialTradingAmount,
                riskType: r.riskType
            }
          ))
          finalRows.map(e => {
            if(e.riskType === 1){
                e.riskType = "BAJO"
            } else if(e.riskType === 2){
                e.riskType = "MEDIO"
            } else{
                e.riskType = "ALTO"
            }
          })
        setOperations(finalRows)
      })
    },[])
    return(
        <div>
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
        <div style={{margin:'5px'}}>
            
            <h1>Ultimas operaciones</h1>
            <React.StrictMode>
                    <div style={{ height: 400, width: '99%', justifyContent:'center', margin:'5px' }}>
                        <DataGrid
                            rows={operations}
                            columns={columnsName}
                            headerHeight={80}
                            disableExtendRowFullWidth={true}
                        />
                    </div>
            </React.StrictMode>
            <Button color='warning' variant="contained"> PAUSAR BOT</Button>
        </div>
        </Grid>
        </Grid>
        </div>
    )

}

export default VerBots;