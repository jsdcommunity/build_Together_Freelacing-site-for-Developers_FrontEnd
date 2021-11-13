import { Grid, Paper,Typography,Button } from '@mui/material'
import React from 'react'

function HeroSection() {
    return (
        <Paper elevation={3} sx={{mt:3,mx:2}}>
            <Grid container spacing={2}>
                <Grid item sx={{my:5}} xs={12} sm={6}>
                    <Typography color="green" variant="h4" sx={{px:5}} gutterBottom component="div">
                        Find & Hire <br />
                        Expert Freelancers 
                    </Typography>
                    <Typography variant="body1"  sx={{px:5}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                
                        Work with the best freelance talent from around the world           
                        flexible and cost-effective platform !
                    </Typography>
                    <Button sx={{ml:5,mt:3}} variant="contained">Explore now </Button>
                </Grid>
                <Grid display={{xs:"none",sm:"block"}} textAlign="center" item xs={12} sm={6}>
                   <img src="assets/hero-man.png" width="300px" alt="UpBit" />
                </Grid>
            </Grid>
        </Paper>
    ) 
}

export default HeroSection
