import React from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import './App.css';
import {currenctConvert} from './service/data';
import { useState,useEffect} from "react";
function App() {
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [currencyData,setCurrencyData]=useState({
    from:'',
    to:'',
    amount:'',
 });

  useEffect(()=>{
  },[currencyData]);

  const handleChange=(event,property)=>{
    setCurrencyData({...currencyData,[property]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    currenctConvert(currencyData).then((resp)=>{
      console.log(resp);
      setConvertedAmount(resp);
    })
  };
  return (
    <>
     <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Currency Converter
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="From"
              variant="outlined"
              onChange={(e)=>handleChange(e,"from")}
              value={currencyData.from}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="To"
              variant="outlined"
              onChange={(e)=>handleChange(e,"to")}
              value={currencyData.to}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Amount"
              variant="outlined"
              placeholder="Enter amount"
              onChange={(e)=>handleChange(e,"amount")}
              value={currencyData.amount}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {convertedAmount !== null && (
                <div>
                    <h2>Converted Amount: {convertedAmount}</h2>
                </div>
      )}
    </Container>
    </>
    );
}

export default App
