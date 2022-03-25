import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CustomSelect(props){

    const [currentValue,setCurrentValue] = React.useState("")
    const [data,setData] = React.useState([])

    React.useEffect(() => {
        setData(props.data)
    },[data])

    return(
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={currentValue}
    label={props.label}
    onChange={e => {setCurrentValue(e.target.value)}}
    >
        {data.map((object,i) =>{
            return (<MenuItem key={i} value={object.value}>{object.text}</MenuItem>)
        })}
    </Select>
    </FormControl>
    )
}

export default CustomSelect