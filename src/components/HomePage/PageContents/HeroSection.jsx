import { Grid, Paper,Typography,Button, Stack, Chip } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function HeroSection() {
    return (
        <Paper elevation={3} sx={{mt:4,mx:3}}>
            <Grid container spacing={2}>
                <Grid item sx={{my:5}} xs={12} sm={6}>
                    <Typography sx={{px:{md:"100px",xs:"10px"},fontFamily:"sans-serif",fontWeight:"700",fontSize:{md:"30px",xs:"25px"}}} color="green" variant="h4"  component="div">
                        Find & Hire <br />
                        Expert Freelancers 
                    </Typography>
                    <Typography variant="subtitle1" sx={{fontSize:"16px",px:{md:"100px",xs:"10px"},my:1,fontStyle:"italic"}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                
                        Work with the best freelance talent from around the world           
                        flexible and cost-effective platform !
                    </Typography>
                    <Stack sx={{px:{md:"100px",xs:"10px"}, my:1}} direction={{xs:"column",md:"row"}} spacing={1}>
                        <Chip label="Android apps" color="primary" variant="outlined" />
                        <Chip label="Web apps" color="success" variant="outlined" />
                        <Chip label="Game Development" color="primary" variant="outlined" />
                        <Chip label="Many more..." color="success" variant="outlined" />
                    </Stack>
                    <Button endIcon={<ArrowForwardIcon />} sx={{mx:{md:"100px",xs:"10px"},my:1}} variant="contained">Explore now </Button>
                </Grid>
                <Grid display={{xs:"none",sm:"block"}} textAlign="center" item xs={12} sm={6}>
                   <img src="assets/hero-man.png" width="300px" alt="UpBit" />
                </Grid>
            </Grid>
        </Paper>    
    ) 
}

export default HeroSection
