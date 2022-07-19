import { Grid,Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TradingView from '../components/TradingView';
import { DataGrid } from '@mui/x-data-grid';
import NavbarCustom from '../components/NavbarCustom';
import axios from 'axios';
import { enviroment } from '../enviroment';
    
const Operations = () =>{
    
    const [operacioness, setOperacioness] = useState([])
    const [par, setPar] = useState('')

    const columns = [
        { field: 'id', headerName: 'ID', width: 20, sortable: false  },
        { field: 'coinPair', headerName: 'Coin Pair', width: 120,sortable: false  },
        { field: 'roe', headerName: '%ROE', width: 40, sortable: false  },
    ]

    const GuardarPar = (prop) => {
        operacioness.map((res) => 
            {if(res.id === prop[0]){
                setPar(res.coinPair)
            }
        })
    }

    useEffect(() => {
        let queryParams = {
            userId: sessionStorage.getItem('userId'),
            pendings: true,
        }
        axios.get(enviroment.urlBaseBack+'/Operation', {params: queryParams})
        .then(res => {
            let finalRows = res.data.map( respuesta => (
                {
                    id: respuesta.orderId,
                    coinPair: respuesta.coinPair,
                    roe: respuesta.finalROE
                }
            ))
            setOperacioness(finalRows)
        })
    },[])
    return (
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
        <Grid container>
            <Grid item xs={8} sx={{marginRight:'5vw'}}>
                <TradingView 
                width='60vw'
                height='80vh'
                pair={par}/>
            </Grid>
            <Grid item xs={3} style={{margin:'3px'}}>
                <h1> Operaciones Abiertas </h1>
                <DataGrid
                style={{margin:'2px'}}
                  rows={operacioness}
                  columns={columns}
                  hideFooter
                  onSelectionModelChange={(newselect) => {
                      GuardarPar(newselect)
                  }}
                />
            </Grid>
            <Grid container spacing={3} xs={6} style={{padding:10}} >
                
                    <h5 style={{margin:30}}>AMOUNT   50</h5>
                    <h5 style={{margin:30}}>PROFIT   <b style={{color:'green'}}> +50 </b> </h5>
                    <h5 style={{margin:30}}>RESULT   50</h5>
                    <Button variant="contained" color="error">Close Operation</Button>
                
            </Grid>
        </Grid>
        </Grid>
        </Grid>
    )
}

export default Operations
