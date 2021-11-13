import { Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

function Features() {
    return (
        <Grid container spacing={2} sx={{mt:"100px"}}>
            <Grid textAlign="center" item xs={12} md={6}>
                <img src="svg/features.svg" alt="" width="50%"/>
            </Grid>
            <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{mx:2}}>
                <Paper elevation={2} sx={
                    {
                        p:1,
                        display:"flex",
                        alignItems:"center",    
                        maxWidth:"600px"

                    }}>
                    <CheckCircleOutlineRoundedIcon color="success"  sx={{mx:2,fontSize:"30px"}}/>
                    Connect to freelancers with proven business experience
                </Paper>
                <Paper elevation={2} sx={
                    {
                        p:1,
                        mx:2,
                        display:"flex",
                        alignItems:"center",    
                        maxWidth:"600px",
                        marginLeft:"300px"
                    }}>
                    <CheckCircleOutlineRoundedIcon color="success"  sx={{mx:2,fontSize:"30px"}}/>
                    Manage teamwork and boost productivity with one powerful workspace
                </Paper>
                <Paper elevation={2} sx={
                    {
                        p:1,
                        display:"flex",
                        alignItems:"center",    
                        maxWidth:"600px",
                        mx:2
                    }}>
                    <CheckCircleOutlineRoundedIcon color="success"  sx={{mx:2,fontSize:"30px"}}/>
                    Get matched with the perfect talent by a customer success manager

                </Paper>
            </Stack>
            </Grid>
      </Grid>
    )
}

export default Features
