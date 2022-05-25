import React, { useState,useEffect } from 'react';
import BasicCard from '../components/CustomCard';
import '../index.css';
import {enviroment} from '../enviroment'
import MediaCard from '../components/ChartCard';
import Grid from '@mui/material/Grid';
import NavbarCustom from '../components/NavbarCustom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';

function PantallaPrincipal(){

    const [currentOperations,setCurrentOperations] = useState([])
    
    const columnsName = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'coinPair', headerName: 'Coin Pair', width: 200 },
        { field: 'quantityToBuy', headerName: 'Margin', width: 70 },
        { field: 'operation', headerName: 'Type', width: 70 },
        { field: 'roe', headerName: '% ROE', width: 70 },
    ]

    useEffect(() => {
        let queryParams = {
            userId : sessionStorage.getItem('userId'),
            pendings : true
        }
        axios.get(enviroment.urlBaseBack+'/Operation', {params : queryParams})
                .then(res => {
                   let finalRows = res.data.map(r => (
                            {
                              id: r.orderId,
                              coinPair :r.coinPair,
                              quantityToBuy:  r.quantityToBuy,
                              operation: r.operation,
                              roe: r.finalROE
                            }
                        )
                   )
                   setCurrentOperations(finalRows)
                })
    },[])


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
                <React.StrictMode>
                    <div style={{ height: 400, width: '80%', justifyContent:'center' }}>
                        <DataGrid
                            rows={currentOperations}
                            columns={columnsName}
                        />
                    </div>
                </React.StrictMode>
            </div>
        </div>
        </Grid>
      </Grid>
        </div>
    )
}

export default PantallaPrincipal;

