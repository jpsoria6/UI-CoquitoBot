import React from 'react';
import '../index.css';
import Grafico from '../components/Grafico'
import GraficoDaily from '../components/GraphicDailyOp';
import GraficoOperations from '../components/GraphicOperations';


function ViewGraphic(){
    return (
        <div style={{margin:'5px'}}>
            <h1> Monthly ROE </h1>
            <div style={{margin:'10px'}}>
                <Grafico></Grafico>
            </div>
            <h1> Daily Operations </h1>
            <div style={{margin:'10px'}}>
                <GraficoDaily></GraficoDaily>
            </div>
            <h1> Operations Complete </h1>
            <div style={{margin:'10px'}}>
                <GraficoOperations></GraficoOperations>
            </div>
        </div>
    )
}

export default ViewGraphic;