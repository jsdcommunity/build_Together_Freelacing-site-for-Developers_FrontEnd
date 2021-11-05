import React, { useState } from "react";
import "./LoginContent.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../utils/formSchema/loginSchema";
import { useHistory } from "react-router";
import {
   Button,
   Grid,
   Paper,
   Stack,
   TextField,
   Typography,
   Link,
   Divider,
   CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import { loginUser } from "../../helpers/api";
import { useSnackbar } from "notistack";
import { saveUserAuth } from "../../helpers";

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

function LoginContent(props) {
   const { enqueueSnackbar } = useSnackbar();

   const [loading, setLoading] = useState(false);

   const classes = useStyles();

   const history = useHistory();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(loginSchema),
   });

   const submitForm = data => {
      setLoading(true);
      loginUser({ ...data })
         .then(response => {
            setLoading(false);
            enqueueSnackbar(response.message, { variant: "success" });
            saveUserAuth(response.token);
            history.push("/");
         })
         .catch(err => {
            setLoading(false);
            enqueueSnackbar(err.message, { variant: "error" });
         });
   };

   return (
      <Paper
         elevation={4}
         className={classes.root}
         sx={{ ml: { sm: 2 }, mr: { sm: 2 } }}
      >
         <Grid container>
            <Grid item xs={12} sm={7} sx={{ pt: 5, pb: 5 }}>
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
                        placeholder="example@email.com"
                        color="info"
                        label="Email"
                        variant="standard"
                        type="email"
                        name="email"
                        helperText={errors?.email?.message}
                        {...register("email")}
                        error={Boolean(errors.email)}
                     />

                     <TextField
                        sx={{ width: "70%", mt: 2 }}
                        color="info"
                        type="password"
                        label="Password"
                        variant="standard"
                        name="password"
                        helperText={errors?.password?.message}
                        {...register("password")}
                        error={Boolean(errors.password)}
                     />

                     <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                        <Link
                           color="gray"
                           className={classes.link}
                           underline="none"
                        >
                           Forgot Password ?
                        </Link>
                        <Link
                           color="green"
                           className={classes.link}
                           underline="none"
                           sx={{
                              display: { xs: "block", sm: "none" },
                           }}
                           component={RouterLink}
                           to="/sign-up"
                        >
                           Join Now
                        </Link>
                     </Stack>
                     <Button
                        sx={{ mt: 1 }}
                        type="submit"
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        disabled={loading}
                     >
                        {loading ? <CircularProgress size="24px" /> : "Get in"}
                     </Button>
                  </form>
               </Stack>
            </Grid>
            <Grid
               item
               xs={12}
               sm={5}
               sx={{
                  backgroundColor: "#f5f5f5",
                  paddingTop: "5rem",
               }}
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
                     onClick={() => history.push("/sign-up")}
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
   );
}

export default LoginContent;
