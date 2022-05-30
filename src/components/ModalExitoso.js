import React from 'react'
import '../styles/styleLogin.css'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { Button } from '@mui/material';

const ModalExitoso = (props) => {
    return (
        <div className='cajaGrande'>
            <div className='cajaMediana'>
                <div className='caja'>
                    <DoneOutlineIcon sx={{ color: 'success', fontSize:70 }} className="cajaIcono"/>   
                </div>
                <h1> {props.tittle}</h1>
                <p> <b> {props.message} </b></p>
                <Button>Aceptar </Button>
            </div>
        </div>
    )
}

export default ModalExitoso;