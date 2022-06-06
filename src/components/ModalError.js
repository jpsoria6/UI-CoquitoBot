import React from 'react'
import '../styles/styleLogin.css'
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';

const ModalError = (props) => {
    return (
        <div className='cajaGrande'>
            <div className='cajaMediana'>
                <div className='caja'>
                    <ClearIcon sx={{ color: 'red', fontSize:70 }} className="cajaIcono"/>
                </div>
                <h1> {props.tittle}</h1>
                <p> <b> {props.message} </b></p>
                <Button>Aceptar </Button>
            </div>
        </div>
    )
}
export default ModalError