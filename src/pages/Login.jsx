import React from "react";
import {
   Button,
   Grid,
   Paper,
   Stack,
   TextField,
   Typography,
   Link,
   Divider
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const useStyles = makeStyles({
   root: {
      maxWidth: "900px",
      margin: "2rem auto",
      
   },
   link: {
      cursor: "pointer",
   },
   alignItem:{
    padding: "2rem 0"
   }
});

function Login() {
   const classes = useStyles();

   return (
      <Paper elevation={4} className={classes.root}>
         <Grid container>
            <Grid item xs={12} sm={7} className={classes.alignItem}>
               <Stack direction="column" spacing={2} alignItems="center">
                  <Typography
                     variant="h4"
                     sx={{ fontWeight: "900" }}
                     className={classes.title}
                  >
                     Sign In
                  </Typography>


                  {/* Google auth */}
                    <GoogleAuth />

                  <Divider sx={{width:'70%'}} >OR</Divider>
                  <TextField
                     sx={{ width: "70%" }}
                     placeholder="example@gmail.com"
                     color="info"
                     label="Email"
                     variant="standard"
                  />
                  <TextField
                     sx={{ width: "70%" }}
                     color="info"
                     type="password"
                     label="Password"
                     variant="standard"
                  />
                  <Stack direction="row" spacing={2}>

                  <Link color="gray" className={classes.link} underline="none">
                     Forgot Password ?
                  </Link>
                  <Link color="green" className={classes.link} underline="none">
                     Sign Up ?
                  </Link>
                  </Stack>
                  <Button variant="contained" endIcon={<ArrowForwardIcon />}>Continue</Button>
                 
                  
               </Stack>
            </Grid>
            <Grid item xs={12} sm={5} className={classes.alignItem} sx={{backgroundColor:"#f5f5f5",paddingTop:"5rem"}} display={{ xs: "none", sm: "block" }}>
            <Stack direction="column" spacing={3} alignItems="center" justifyContent="center">
               
                <img src="logo512.png" alt="" width="100" />
                <Typography
                     variant="h5"
                    sx={{fontWeight:"700"}}
                  >
                    Don't have an account ?
                  </Typography>
                  <Button variant="contained" endIcon={<PersonAddAltRoundedIcon />} color="success">Join Now</Button>
               </Stack>
            </Grid>
         </Grid>
      </Paper>
   );
}

export default Login;
