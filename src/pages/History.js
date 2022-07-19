import Grid from '@mui/material/Grid';
import NavbarCustom from '../components/NavbarCustom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import {enviroment} from '../enviroment'
import React, { useState,useEffect } from 'react';



const History = () => {

    const columnsName = [
        { field: 'id', headerName: 'Id', width: 130, flex:1 },
        { field: 'coinPair', headerName: 'Coin Pair', width: 150, flex:1 },
        { field: 'quantityToBuy', headerName: 'Margin', width: 70, flex:1 },
        { field: 'operation', headerName: 'Type', width: 70,flex:1 },
        { field: 'roe', headerName: '% ROE', width: 70, flex:1 },
    ]

    const [operations,setOperations] = useState([])
    
    useEffect(() => {
        let queryParams = {
            userId : sessionStorage.getItem('userId'),
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
        </div>
        </Grid>
        </Grid>
        </div>
    )

}

export default History;