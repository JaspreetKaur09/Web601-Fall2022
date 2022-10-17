import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';




function TempContrl() {
  const [count, setCount] = useState(22);
  const [mode, setMode] = useState("Heat");
  const [temp, setTemp] = useState("C");

  function convertTemp() {
    if (temp === "C") {
      setCount((count * 9) / 5 + 32);
      setTemp("F");
    }

    if (temp === "F") {
      setCount(((count - 32) * 5) / 9);
      setTemp("C");
    }
  }
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>

      
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="row"
      justifyContent="center"
  alignItems="center" spacing={2}>
        <Grid item xs={9}>
        <Typography variant="h4" gutterBottom>Temperature Control</Typography>
        </Grid>

        <Grid item xs={8}>
        <Typography variant="h4" gutterBottom>{mode}</Typography>
        </Grid>

        <Grid item xs={8}>
        <Typography variant="h4" gutterBottom>
        {count} &nbsp; &#176;{temp}
        </Typography>
        </Grid>

        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
       <Button variant="contained" onClick={() => setCount(count - 1)}>-</Button>
        <Button variant="contained" onClick={() => setCount(count + 1)}>+</Button>
        </Stack>
        </Grid>       
       
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={() => {setMode("Cold");}}>Cold</Button>
          <Button variant="outlined" onClick={() => {setMode("Hot");}}>Hot</Button>
          <Button variant="outlined" onClick={() => {setMode("Auto Mode");}}>Auto Mode</Button>
        </Stack>
        </Grid>
         
         
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={() => {setTemp("C");}}>Celsius</Button>
          <Button variant="outlined" onClick={() => {setTemp("F");}}>Farhnet</Button>
        </Stack>
        </Grid>
  
        <Grid item xs={8}>
          <Button variant="outlined" onClick={() => {convertTemp("");}}>Convert Temperature</Button>
        </Grid>
      </Grid>
    </Box>

      <div>
 



 




      </div>
    </Container>
    </Paper>
  );
}

export default TempContrl;
