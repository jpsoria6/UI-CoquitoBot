import React from 'react'
import '../styles/styleLogin.css'
import CheckIcon from '@mui/icons-material/Check';

const ModalExitoso = (props) => {
    return (
        <div>
            <div className='caja'>
                <CheckIcon color='success'/>
            </div>
            <h1> {props.tittle}</h1>
            <p> {props.message} </p>
        </div>
    )
}

export default ModalExitoso;