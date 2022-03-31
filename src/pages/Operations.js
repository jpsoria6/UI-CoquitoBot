import { Grid } from '@mui/material';
import React, { useState } from 'react';
import TradingView from '../components/TradingView';
import { DataGrid } from '@mui/x-data-grid';


const rows = [
    {id: 1, coinPair:'BTC/USDT' , roe:'30'},
    {id: 2, coinPair:'ETH/USDT' , roe:'-20'},
    {id: 3, coinPair:'XRP/USDT' , roe:'40'},
]

const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    { field: 'coinPair', headerName: 'Coin Pair', width: 40 },
    { field: 'roe', headerName: '%ROE', width: 20 },
]
    
const Operations = () =>{

    return (
        <Grid>
            <Grid xs={8}>
                <TradingView 
                width='60vw'
                height='80vh'
                pair="ETHUSDT"/>
            </Grid>
            <Grid xs={2}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
            </Grid>
        </Grid>
    )
}

export default Operations
