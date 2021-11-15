import { Grid, Paper, Typography, Button, Stack, Chip } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

function HeroSection({
   mainTitle,
   subTitle,
   labels = [],
   imageSrc,
   btnText,
   btnClick = e => null,
}) {
   const darkMode = useSelector(state => state.darkMode);

   return (
      <Paper
         elevation={3}
         sx={{
            mt: 4,
            mx: { xs: 2, md: 3 },
            bgcolor: darkMode ? "#111" : "#cdffcd",
            px: { xs: 1, sm: 2, md: 3 },
         }}
      >
         <Grid container spacing={2}>
            <Grid item sx={{ my: 5 }} xs={12} sm={6}>
               <Typography
                  sx={{
                     px: { md: "100px", xs: "10px" },
                     fontFamily: "sans-serif",
                     fontWeight: "700",
                     fontSize: { md: "30px", xs: "25px" },
                  }}
                  color="green"
                  variant="h4"
                  component="div"
               >
                  {mainTitle}
               </Typography>
               <Typography
                  variant="subtitle1"
                  sx={{
                     fontSize: "16px",
                     px: { md: "100px", xs: "10px" },
                     my: 1,
                     fontStyle: "italic",
                  }}
               >
                  {subTitle}
               </Typography>
               <Stack
                  sx={{ px: { md: "100px", xs: "10px" }, my: 1 }}
                  direction={{ xs: "column", md: "row" }}
                  spacing={1}
               >
                  {labels.map((label, key) => (
                     <Chip
                        label={label}
                        color={key % 2 === 0 ? "success" : "primary"}
                        variant="outlined"
                        key={key}
                     />
                  ))}
               </Stack>
               <Button
                  onClick={btnClick}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ mx: { md: "100px", xs: "10px" }, my: 1 }}
                  variant="contained"
               >
                  {btnText}
               </Button>
            </Grid>
            <Grid
               display={{ xs: "none", sm: "block" }}
               textAlign="center"
               item
               xs={12}
               sm={6}
            >
               <img src={imageSrc} width="300px" alt="UpBit Images" />
            </Grid>
         </Grid>
      </Paper>
   );
}

export default HeroSection;
