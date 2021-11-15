import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function CalltoAction({ title, btnText, btnClick, imageSrc }) {
   return (
      <Grid
         container
         spacing={2}
         sx={{
            display: "flex",
            alignItems: "center",
            my: 5,
            p: 2,
            backgroundColor: "brown",
         }}
      >
         <Grid item xs={12} md={6}>
            <Typography
               color="white"
               sx={{
                  fontSize: { xs: "25px", md: "30px" },
                  fontWeight: "500",
                  ml: { xs: "10px", md: "100px" },
               }}
            >
               {title}
            </Typography>
            <Button
               onClick={btnClick}
               sx={{ ml: { xs: "10px", md: "100px" }, my: 1 }}
               variant="contained"
               color="success"
            >
               {btnText}
            </Button>
         </Grid>
         <Grid textAlign="center" item xs={12} md={6}>
            <img src={imageSrc} alt="UpBit Images" width="50%" />
         </Grid>
      </Grid>
   );
}

export default CalltoAction;
