import { Grid,Button } from '@mui/material';
import React, { useState } from 'react';
import TradingView from '../components/TradingView';
import { DataGrid } from '@mui/x-data-grid';


const rows = [
    {id: 1, coinPair:'BTC/USDT' , roe:'30'},
    {id: 2, coinPair:'ETH/USDT' , roe:'-20'},
    {id: 3, coinPair:'XRP/USDT' , roe:'40'},
    {id: 4, coinPair:'ADA/USDT' , roe:'87'},
    {id: 5, coinPair:'BNB/USDT' , roe:'-40'},
    {id: 6, coinPair:'SFT/USDT' , roe:'33'},
]

const columns = [
    { field: 'id', headerName: 'ID', width: 20, sortable: false  },
    { field: 'coinPair', headerName: 'Coin Pair', width: 120,sortable: false  },
    { field: 'roe', headerName: '%ROE', width: 40, sortable: false  },
]
    
const Operations = () =>{

    return (
        <Grid container>
            <Grid item xs={8} sx={{marginRight:'5vw'}}>
                <TradingView 
                width='60vw'
                height='80vh'
                pair="BTCUSDT"/>
            </Grid>
            <Grid item xs={3}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  hideFooter
                />
            </Grid>
            <Grid item xs={12}>
                <Button sx={{margin:'5px'}} variant="contained" color="error">Close Operation</Button>
            </Grid>
        </Grid>
    )
}

export default Operations
