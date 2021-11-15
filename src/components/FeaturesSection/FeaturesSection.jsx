import { Alert, Grid, Stack } from "@mui/material";
import React from "react";

function FeaturesSection({ imageSrc, featuresList = [] }) {
   return (
      <Grid container spacing={2} sx={{ mt: "100px" }}>
         <Grid textAlign="center" item xs={12} md={6}>
            <img src={imageSrc} alt="" width="50%" />
         </Grid>
         <Grid item xs={12} md={6}>
            <Stack spacing={4} sx={{ mx: 2 }}>
               {featuresList.map((featureItm, key) => (
                  <Alert
                     sx={{ maxWidth: { xs: "100%", md: "600px" } }}
                     elevation={3}
                     severity="success"
                  >
                     {featureItm}
                  </Alert>
               ))}
            </Stack>
         </Grid>
      </Grid>
   );
}

export default FeaturesSection;
