import React from 'react'
import '../styles/styleLogin.css'
import ClearIcon from '@mui/icons-material/Clear';

const ModalError = (props) => {
    return (
        <div>
            <div className='caja'>
                <ClearIcon sx={{ color: 'red' }}/>
            </div>
            <h1> {props.tittle}</h1>
            <p> {props.message} </p>
        </div>
    )
}
export default ModalError