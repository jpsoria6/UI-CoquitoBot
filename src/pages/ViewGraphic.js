import React from 'react';
import '../index.css';
import Grafico from '../components/Grafico'


function ViewGraphic(){
    return (
        <div>
            <h1> Monthly ROE </h1>
            <div style={{margin:'10px'}}>
                <Grafico></Grafico>
            </div>
            <h1> Daily Operations </h1>
            <div style={{margin:'10px'}}>
                <Grafico></Grafico>
            </div>
            <h1> Operations Complete </h1>
            <div style={{margin:'10px'}}>
                <Grafico></Grafico>
            </div>
        </div>
    )
}

export default ViewGraphic;