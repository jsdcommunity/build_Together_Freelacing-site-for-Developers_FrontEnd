import React from "react";
import {
   Button,
   Grid,
   Paper,
   Stack,
   TextField,
   Typography,
   Link,
   Divider,
   useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../components/formschema/loginSchema";
import { useHistory } from "react-router";

const useStyles = makeStyles({
   root: {
      maxWidth: "900px",
      margin: "2rem auto",
   },
   link: {
      cursor: "pointer",
   },
   flex: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      width: "100%",
   },
});

function Login() {
   const classes = useStyles();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
   const history = useHistory();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   });

   // form data..
   const submitForm = (data) => {
      console.log("got it..", data);
   };

   return (
      <>
         <Header />
         <Paper
            elevation={4}
            className={classes.root}
            sx={isMobile ? { ml: 2, mr: 2 } : {}}
         >
            <Grid container>
               <Grid item xs={12} sm={7} sx={{ pt: 3, pb: 3 }}>
                  <Stack direction="column" spacing={2} alignItems="center">
                     <Typography
                        variant="h4"
                        sx={{ fontWeight: "900" }}
                        className={classes.title}
                     >
                        Sign In
                     </Typography>

                     {/* Google authentication */}
                     <GoogleAuth />

                     <Divider sx={{ width: "70%" }}>OR</Divider>
                     <form
                        className={classes.flex}
                        action=""
                        onSubmit={handleSubmit(submitForm)}
                     >
                        <TextField
                           sx={{ width: "70%" }}
                           placeholder="example@gmail.com"
                           color="info"
                           label="Email"
                           variant="standard"
                           type="email"
                           name="email"
                           helperText={errors.email?.message}
                           {...register("email")}
                           error={errors.email ? true : false}
                        />

                        <TextField
                           sx={{ width: "70%", mt: 2 }}
                           color="info"
                           type="password"
                           label="Password"
                           variant="standard"
                           name="password"
                           helperText={errors.password?.message}
                           {...register("password")}
                           error={errors.password ? true : false}
                        />

                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                           <Link
                              color="gray"
                              className={classes.link}
                              underline="none"
                           >
                              Forgot Password ?
                           </Link>
                           {isMobile ? (
                              <Link
                                 color="green"
                                 className={classes.link}
                                 underline="none"
                                 onClick={() => history.push("/signup")}
                              >
                                 Join Now
                              </Link>
                           ) : (
                              " "
                           )}
                        </Stack>
                        <Button
                           sx={{ mt: 1 }}
                           type="submit"
                           variant="contained"
                           endIcon={<ArrowForwardIcon />}
                        >
                           {" "}
                           Continue{" "}
                        </Button>
                     </form>
                  </Stack>
               </Grid>
               <Grid
                  item
                  xs={12}
                  sm={5}
                  sx={{ backgroundColor: "#f5f5f5", paddingTop: "5rem" }}
                  display={{ xs: "none", sm: "block" }}
               >
                  <Stack
                     direction="column"
                     spacing={3}
                     alignItems="center"
                     justifyContent="center"
                  >
                     <img src="logo512.png" alt="" width="100" />

                     <Typography variant="h5" sx={{ fontWeight: "700" }}>
                        Don't have an account ?
                     </Typography>
                     <Button
                        onClick={() => history.push("/signup")}
                        variant="contained"
                        endIcon={<PersonAddAltRoundedIcon />}
                        color="success"
                     >
                        Join Now
                     </Button>
                  </Stack>
               </Grid>
            </Grid>
         </Paper>
         <Footer />
      </>
   );
}

export default Login;
