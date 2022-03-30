import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Box from '@mui/material/Box';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import img1 from '../img/img1.jpeg';
import img2 from '../img/img2.jpeg';
import img3 from '../img/img3.jpeg';
import img4 from '../img/img4.jpeg';
import img5 from '../img/img5.jpeg';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });



const rows = [
  { image:img1 , Name: 'XRP-USDT',laverge:'Laverage x20', Margin: '$' + 113, Type: 'LONG', ROE:21 },
  { image:img2 , Name: 'ADA-USDT',laverge:'Laverage x20', Margin: '$' + 132, Type: 'LONG', ROE:12 },
  { image:img3 , Name: 'BNB-USDT',laverge:'Laverage x20', Margin: '$' + 122, Type: 'LONG', ROE:12 },
  { image:img4 , Name: 'BTC-USDT',laverge:'Laverage x20', Margin: '$' + 136, Type: 'SHORT', ROE:13 },
  { image:img5 , Name: 'ETH-USDT',laverge:'Laverage x20', Margin: '$' + 152, Type: 'SHORT', ROE:13},
 
];

function Tabla() {
    const classes = useStyles();
    return (
        <div style={{ height: 400, width: '100%' }}>

          <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}>
                <TableCell></TableCell>
                <TableCell ></TableCell>
                </Box>
                <TableCell align="right">Margin</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">ROE%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Name}>
                <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}>
                  <TableCell component="th" scope="row">
                      <img src={row.image} style={{width:"40px", height:"30px"}} alt="" />
                  </TableCell>
                  <TableCell align="left"> <b>{row.Name} </b> <br/> <div style={{color:'green'}}>{row.laverge}</div></TableCell>
                </Box>
                  <TableCell align="right">{row.Margin}</TableCell>
                  <TableCell align="right">{row.Type}</TableCell>
                  <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}
                  >
                    <TableCell align="right"> <b>{row.ROE}</b> 
                        <ExpandLessIcon/>
                    </TableCell>
                  </Box>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        </div>
  );
}

export default Tabla;