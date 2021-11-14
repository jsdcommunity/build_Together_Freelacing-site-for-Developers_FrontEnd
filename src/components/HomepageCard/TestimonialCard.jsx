import { Grid, Typography } from '@mui/material'
import React from 'react'

function TestimonialCard({...item}) {
    return (
        <Grid sx={
                {
                 display:"flex",
                 alignItems:"center",
                }
            } container spacing={2}>
            <Grid textAlign="center" item xs={12} sm={5}>
                <img src={item.testImg} width="40%"/>
            </Grid>
            <Grid item xs={12} md={7} textAlign={{xs:"center",sm:"unset"}}>
                <Typography sx={{fontSize:{xs:"16px",md:"20px"},maxWidth:"600px",fontFamily:"sans-serif",fontStyle:"italic"}}>
               "{item.content} "
                </Typography>
                <Typography variant="subtitle1" color="GrayText" sx={{my:1}}>
                    Nameof the company | CEO
                </Typography>

            </Grid> 
      </Grid>
    )
}

export default TestimonialCard
