import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";

const featuresList = [
   " Market your Skills through Upbit",
   " Find & connect your perfect clients",
   " Work on your preferable time",
   "Get paid for your work",
];

function DeveloperChartsSection() {
   return (
      <div>
         <Typography sx={{ p: 1, fontWeight: "900" }} variant="h5">
            Hi , user &#128075;{" "}
         </Typography>
         <Grid container spacing={2}>
            {featuresList.map(item => {
               return (
                  <Grid item xs={12} md={6} lg={3}>
                     <Paper
                        elevation={3}
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           textAlign: "center",
                           p: 3,
                           my: 2,
                           minHeight: "100px",
                           cursor: "pointer",
                        }}
                     >
                        <Typography variant="subtitle2" color="#111">
                           {item}
                        </Typography>
                     </Paper>
                  </Grid>
               );
            })}
         </Grid>
         <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
               <Typography sx={{ p: 1 }} variant="h6">
                  Orders details
               </Typography>
               <Paper elevation={3} sx={{ p: 3 }}>
                  <PieChart />
               </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
               <Typography sx={{ p: 1 }} variant="h6">
                  Proposals
               </Typography>
               <Paper elevation={3} sx={{ p: 3 }}>
                  <BarChart />
               </Paper>
            </Grid>
         </Grid>
      </div>
   );
}

export default DeveloperChartsSection;
