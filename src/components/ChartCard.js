import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from '../img/img10.jpeg';
import img2 from '../img/img11.webp';
import img3 from '../img/img12.webp';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";



const cardRow = [
    {img:img1,name:'Monthly ROE',description:'Last Campaign Performance',time:'compaing sent 2 days ago'},
    {img:img2,name:'Daily Operations',description:'(+15%) increase in today sales. ',time:'update 5min ago'},
    {img:img3,name:'Operations Complete',description:'Last Compaign Performance',time:'just updated'}
]



function MediaCard() {
  return (
      <div>
        <Grid container spacing={1}>
            {cardRow.map((row,i) => (
            <Card key={i} sx={{ maxWidth: 345 }} style={{margin:'10px', width:'30%'}}>
              <CardMedia
                component="img"
                height="140"
                image={row.img}
                alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.time}
                </Typography>
                <CardActions>
                  <Link to='/Graphic'>
                    <Button size="small" color="primary"> Ver Más </Button>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
            ))}
    </Grid>
    </div>
  );
}

export default MediaCard;