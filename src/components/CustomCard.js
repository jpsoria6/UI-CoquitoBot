import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import img1 from '../img/img6.jpg';
import img2 from '../img/img7.jpg';
import img3 from '../img/img8.jpg';
import img4 from '../img/img9+.jpg';
import Grid from '@mui/material/Grid';
import '../index.css';
import { Scale } from '@mui/icons-material';


const typecards = [
    {img:img1, name:'USDT', number:3400, description:'+55% than last week'},
    {img:img2, name:'Operations', number:2300, description:'+33% than last week'},
    {img:img3, name:'Roe Total', number:345 + '%', description:'+1% than yesterday'},
    {img:img4, name:'Number of open trades', number:5, description:'Just updated'},
]



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



function BasicCard() {
  return (
      <div>
          <Grid container spacing={1}>
        {typecards.map((row) => (
             <Card sx={{ minWidth: 230 }} style={{margin:'5px'}}>
             <CardContent>
                 <Box sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}>
                    <img src={row.img} style={{width:'50px', height: '50px', flexDirection:'left'}} alt="" />
                 </Box>
               <Typography variant="h5" component="div">
                 {row.name}
               </Typography>
               <Typography sx={{ mb: 1.5 }} color="text.dark">
                 {row.number}
               </Typography>
               <Typography variant="body2" style={{color:'green'}}>
                 {row.description}
                 <br />
               </Typography>
             </CardContent>
            </Card>
        ))}
       </Grid>
      </div>
  );
}

export default BasicCard;