import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import BarChart from '../Charts/BarChart'
import PieChart from '../Charts/PieChart'


function DeveloperChartsSection() {
    return (
        <div>
            <Grid container spacing={2}>
                
                <Grid item xs={12} md={6}>
                    <Typography sx={{p:1}} variant="h6">Orders details</Typography>
                    <Paper elevation={3} sx={{p:3}} >
                        <PieChart />
                    </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                <Typography sx={{p:1}} variant="h6">Proposals</Typography>
                    <Paper elevation={3} sx={{p:3}}>
                        <BarChart />
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default DeveloperChartsSection
