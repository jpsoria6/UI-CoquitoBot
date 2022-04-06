import React from 'react';
import BasicCard from '../components/CustomCard';
import '../index.css';
import MediaCard from '../components/ChartCard';
import Tabla from '../components/TableOperations';


function PantallaPrincipal(){
    return (
        <div style={{margin:'5px'}}>
            <div style={{margin:'10px'}}>
                <BasicCard/>
            </div>
            <div style={{margin:'10px'}}>
                <MediaCard/>   
            </div>
            <div>
                <h1>Operaciones Abiertas</h1>
                <Tabla/>
            </div>
        </div>
    )
}

export default PantallaPrincipal;

