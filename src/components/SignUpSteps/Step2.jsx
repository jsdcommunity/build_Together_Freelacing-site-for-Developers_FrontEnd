import React, { useRef } from "react";
import { Grid, TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { EMAIL_REGEX } from "../../utils/constants";
import {
   backStep,
   nextStep,
   setEmail,
   setPassword,
} from "../../redux/actions/signUpSteps";
import { useSnackbar } from "notistack";
import { sendConfirmationEmail } from "../../helpers/api";

function Step2(props) {
   const { enqueueSnackbar } = useSnackbar();

   const dispatch = useDispatch();
   const { activeStep, email, password, userType } = useSelector(
      state => state.signUpSteps
   );

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm({
      defaultValues: {
         email: email || "",
         password: password || "",
      },
      mode: "onChange",
   });
   const passwordRef = useRef({});
   passwordRef.current = watch("password", "");

   const onSubmit = async data => {
      const { payload: email } = await dispatch(setEmail(data.email));
      const { payload: password } = await dispatch(setPassword(data.password));
      sendConfirmationEmail(email, password, userType)
         .then(resData =>
            enqueueSnackbar(resData.message, { variant: "success" })
         )
         .catch(err => {
            console.log(err);
            enqueueSnackbar(err.message, { variant: "error" });
         });
   };

   const handleBack = () => {
      dispatch(backStep());
   };

   return (
      <>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
         >
            <Box
               sx={{ mt: 2, mb: 2 }}
               display="flex"
               alignItems="center"
               flexDirection="column"
            >
               <Typography variant="h4">
                  <strong>Sign up</strong>
               </Typography>
               <Typography variant="caption">
                  Enter your basic details!
               </Typography>
            </Box>
            <Grid
               sx={{ p: { md: 5, xs: 1 }, pt: 1, pb: 1 }}
               item
               xs={12}
               sm={6}
               md={6}
            >
               <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  sx={{ mb: 3 }}
                  {...register("email", {
                     required: "This field is required.",
                     minLength: {
                        value: 3,
                        message: "Minimum 3 letters needed.",
                     },
                     maxLength: {
                        value: 30,
                        message: "Maximum length is restricted to 30 letters.",
                     },
                     pattern: {
                        value: EMAIL_REGEX,
                        message: "Invalid email address typed.",
                     },
                  })}
                  error={Boolean(errors.email)}
                  helperText={errors.email && errors.email.message}
               />
               <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  sx={{ mb: 3 }}
                  {...register("password", {
                     required: "This field is required.",
                     minLength: {
                        value: 8,
                        message: "Minimum 8 letters needed.",
                     },
                     maxLength: {
                        value: 24,
                        message: "Maximum length is restricted to 24 letters.",
                     },
                     pattern: {
                        value: /\w\d/gi,
                        message:
                           "Password must contain alphabetic and numeric letters.",
                     },
                  })}
                  error={Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
               />
               <TextField
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  sx={{ mb: 3 }}
                  {...register("confirmPassword", {
                     required: "This field is required.",
                     validate: value =>
                        value === passwordRef.current ||
                        "The passwords do not match.",
                  })}
                  error={Boolean(errors.confirmPassword)}
                  helperText={
                     errors.confirmPassword && errors.confirmPassword.message
                  }
               />
            </Grid>
         </Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "row",
               width: { xs: "100%", md: "30%" },
               m: "auto",
            }}
         >
            <Button
               color="inherit"
               disabled={activeStep === 0}
               onClick={handleBack}
               sx={{ mr: 1 }}
            >
               Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
               {activeStep === 4 ? "Finish" : "Next"}
            </Button>
         </Box>
      </>
   );
}

export default Step2;
