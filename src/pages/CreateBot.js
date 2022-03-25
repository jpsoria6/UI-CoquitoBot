import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomSelect from '../components/CustomSelect';

 
function CreateBot(){
 
    const [apiKey,setApiKey] = useState("")
    const [apiSecret,setApiSecret] = useState("")
    const [currentRisk,setCurrentRisk] = useState("")
    const [amountPerOperation,setAmountPerOperation] = useState("")
    const minAmoutPerOperation = 3;
    const maxAmoutPerOperation = 30;
    const riskPlans = [
        { "value" : 1,"text" : "LOW" },
        { "value" : 2,"text" : "MEDIUM" },
        { "value" : 3,"text" : "HIGH" },
    ]


    return (
        <Grid
        container
        columnSpacing={5}
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <TextField sx={{ m: 1, width: '50ch' }} id="apiKey" label="Api Key" variant="outlined" value={apiKey} onChange={e=>{setApiKey(e.target.value)}}/>
            <TextField sx={{ m: 1, width: '50ch' }} id="apiSecret" label="Api Secret" variant="outlined" value={apiSecret} onChange={e =>{setApiSecret(e.target.value)}}/>
            <Box sx={{m:1, width: '50ch' }}>
                <CustomSelect label="Risk" data={riskPlans}/>
            </Box>
            <Box sx={{m:1, width: '50ch' }}>
                <Typography 
                variant="caption"
                gutterBottom>
                    % To invert per operation (MAX 30%)
                </Typography>
                <Slider 
                min={minAmoutPerOperation} 
                max={maxAmoutPerOperation}  
                valueLabelDisplay="on"
                />
            </Box>
            <Button variant="contained" size='large'>Add Bot</Button>
        </Grid>
    )


}

export default CreateBot
