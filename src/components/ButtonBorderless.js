import React from "react";
import {Button} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
    width: '100%',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: 'none',
    lineHeight: 1.5,
    color: '#000000',
    justifyContent: 'space-around',
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    '&:focus': {
        border: 'none'
      },
    '&:active':{
        color: '#2196F3',
        backgroundColor: '#E3F2FD'
    },
    '&:hover': {
      border: 'none'
    },
  });

const ButtonBorderless = (props) => {

    

    return(
        <StyledButton>{props.icon}{props.label}</StyledButton>
    )

}


export default ButtonBorderless