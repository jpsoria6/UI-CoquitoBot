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
    { image:img4 , Name: 'BTC-USDT', Billetera: '$' + 136,total:'+$320', ROE:13, fecha:'01/01/2022 22:13:44' },
    { image:img3 , Name: 'BNB-USDT', Billetera: '$' + 122,total:'+$220', ROE:12, fecha:'01/01/2022 22:23:32' },
    { image:img2 , Name: 'ADA-USDT', Billetera: '$' + 132,total:'-$23', ROE:12, fecha:'01/01/2022 22:30:53' },
    { image:img5 , Name: 'ETH-USDT', Billetera: '$' + 152,total:'-$30', ROE:13, fecha:'01/01/2022 22:03:11' },
    { image:img1 , Name: 'XRP-USDT', Billetera: '$' + 113,total:'+$3420', ROE:21, fecha:'01/01/2022 22:39:24' },
 
];

function TablaHistorial() {
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
                <TableCell align="right">Fecha</TableCell>
                <TableCell align="right">Total realizado</TableCell>
                <TableCell align="right">Billetera</TableCell>
                <TableCell align="right">ROE%</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Name}>
                <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}>
                  <TableCell component="th" scope="row">
                      <img src={row.image} style={{width:"50px", height:"40px"}} alt="" />
                  </TableCell>
                  <TableCell align="left"> <b>{row.Name} </b> </TableCell>
                </Box>
                  <TableCell align="right">{row.fecha}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                  <TableCell align="right">{row.Billetera}</TableCell>
                 
                  <TableCell align="right"> <b>{row.ROE}</b> 
                      <ExpandLessIcon viewBox='0 0 24 12' color='red'/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        </div>
  );
}

export default TablaHistorial;