import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


// const rows = [
//   { image:img1 , Name: 'XRP-USDT',laverge:'Laverage x20', Margin: '$' + 113, Type: 'LONG', ROE:21 },
//   { image:img2 , Name: 'ADA-USDT',laverge:'Laverage x20', Margin: '$' + 132, Type: 'LONG', ROE:12 },
//   { image:img3 , Name: 'BNB-USDT',laverge:'Laverage x20', Margin: '$' + 122, Type: 'LONG', ROE:12 },
//   { image:img4 , Name: 'BTC-USDT',laverge:'Laverage x20', Margin: '$' + 136, Type: 'SHORT', ROE:13 },
//   { image:img5 , Name: 'ETH-USDT',laverge:'Laverage x20', Margin: '$' + 152, Type: 'SHORT', ROE:13},
 
// ];

function Tabla(props) {
    
    return (
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
          <TableHead> 
                <TableRow>
                  {
                  React.Children.toArray(
                    props.columns.map((columnName,i) => {
                    return( 
                      <React.Fragment key={i}>
                      <TableCell align="right">{columnName}</TableCell>
                      </React.Fragment>
                      )
                    })
                  )}
                  </TableRow>
          </TableHead>
          <TableBody>
              {
                props.rows.map((row) => {
                  return (
                    <React.Fragment key={row.orderId}>
                          <TableRow>
                              {props.columns.map((col,j)=> {
                                return <TableCell align="center">{row[j]}</TableCell>
                                }
                              )}
                          </TableRow>
                    </React.Fragment>)
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
  );
}

export default Tabla;