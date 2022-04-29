import TablaHistorial from "../components/Historial";
import Grid from '@mui/material/Grid';
import NavbarCustom from '../components/NavbarCustom';

const History = () => {
    return(
        <div>
        <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
        <div style={{margin:'5px'}}>
            
            <h1>Ultimas operaciones</h1>
            <TablaHistorial/>
        </div>
        </Grid>
        </Grid>
        </div>
    )

}

export default History;