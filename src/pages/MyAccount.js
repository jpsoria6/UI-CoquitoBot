import React from "react";
import Grid from "@mui/material/Grid";
import NavbarCustom from "../components/NavbarCustom";
import CreateBot from "./CreateBot";
import '../App.css'

const MyAccount = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <NavbarCustom />
        </Grid>
        <Grid item xs={10}>
            <div style={{margin:'20px'}}>
                <h1> Create your Bot </h1>
                <CreateBot />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyAccount;
