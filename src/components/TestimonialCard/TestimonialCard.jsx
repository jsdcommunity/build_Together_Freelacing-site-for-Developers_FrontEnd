import { Grid, Typography } from "@mui/material";
import React from "react";

function TestimonialCard({ quote, imageSrc }) {
   return (
      <Grid
         sx={{
            display: "flex",
            alignItems: "center",
         }}
         container
         spacing={2}
      >
         <Grid
            container
            xs={12}
            md={12}
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{ mb: 3 }}
         >
            <Grid sx={{ mt: 2 }} textAlign="center" item xs={12} sm={5}>
               <img src={imageSrc} alt="" width="40%" />
            </Grid>
            <Typography
               sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  maxWidth: { xs: "300px", md: "600px" },
                  fontFamily: "sans-serif",
                  fontStyle: "italic",
               }}
            >
               "{quote}"
            </Typography>
            <Typography variant="subtitle1" color="GrayText" sx={{ my: 1 }}>
               Name of the person | Position
            </Typography>
         </Grid>
      </Grid>
   );
}

export default TestimonialCard;
