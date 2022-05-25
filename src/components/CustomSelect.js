import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CustomSelect(props){

    return(
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={props.value}
    onChange={e=>props.set(e.target.value)}
    label={props.label}
    >
        {props.data.map((object,i) =>{
            return (<MenuItem key={i} value={object.value}>{object.text}</MenuItem>)
        })}
    </Select>
    </FormControl>
    )
}

export default CustomSelect