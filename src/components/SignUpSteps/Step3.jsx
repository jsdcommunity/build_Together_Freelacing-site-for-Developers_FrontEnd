import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../../redux/actions/signUpSteps";
import { HTTP_LINK_REGEX } from "../../utils/constants";
import MultiItemInput from "../MultiItemInput/MultiItemInput";

function Step3(props) {
   const dispatch = useDispatch();

   const { activeStep, password, email } = useSelector(
      state => state.signUpSteps
   );

   const onSubmit = () => {
      dispatch(nextStep());
   };

   const handleBack = () => {
      dispatch(backStep());
   };

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

   const fullNameRef = useRef({});
   fullNameRef.current = watch("fullName", "");

   return (
      <>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
         >
            <Box
               sx={{ mt: 1, mb: 1 }}
               display="flex"
               alignItems="center"
               flexDirection="column"
            >
               <Typography variant="h4">
                  <strong>Sign up</strong>
               </Typography>
               <Typography variant="caption">Update your profile!</Typography>
            </Box>
            <Grid
               sx={{ p: { md: 2, xs: 1 }, pt: 1, pb: 1, width: "100%" }}
               item
               xs={12}
               sm={6}
               md={6}
            >
               <Box
                  width="100%"
                  display="grid"
                  sx={{ placeContent: "center", mb: 2 }}
               >
                  <img
                     src={`https://avatars.dicebear.com/api/adventurer-neutral/${fullNameRef.current}.svg`}
                     alt="Avatar"
                     style={{ borderRadius: 24 }}
                     width="124"
                  />
               </Box>
               <TextField
                  label="Full name"
                  required
                  variant="outlined"
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  {...register("fullName", {
                     required: "This field is required.",
                     minLength: {
                        value: 3,
                        message: "Minimum 3 letters needed.",
                     },
                     maxLength: {
                        value: 36,
                        message: "Maximum length is restricted to 36 letters.",
                     },
                  })}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName && errors.fullName.message}
               />
               <TextField
                  label="Location"
                  required
                  variant="outlined"
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  {...register("location", {
                     required: "This field is required.",
                     minLength: {
                        value: 3,
                        message: "Minimum 3 letters needed.",
                     },
                     maxLength: {
                        value: 36,
                        message: "Maximum length is restricted to 36 letters.",
                     },
                  })}
                  error={Boolean(errors.location)}
                  helperText={errors.location && errors.location.message}
               />
               <TextField
                  label="Profile Description"
                  required
                  variant="outlined"
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  {...register("description", {
                     required: "This field is required.",
                     minLength: {
                        value: 50,
                        message: "Minimum 50 letters needed.",
                     },
                     maxLength: {
                        value: 250,
                        message: "Maximum length is restricted to 250 letters.",
                     },
                  })}
                  multiline
                  minRows={4}
                  error={Boolean(errors.description)}
                  helperText={errors.description && errors.description.message}
               />
               <TextField
                  label="Mobile number"
                  variant="outlined"
                  type="text"
                  sx={{ mb: 3 }}
                  fullWidth
                  {...register("mobNum", {
                     required: false,
                     minLength: {
                        value: 10,
                        message: "Minimum 10 letters needed.",
                     },
                     maxLength: {
                        value: 14,
                        message: "Maximum length is restricted to 14 letters.",
                     },
                  })}
                  error={Boolean(errors.mobNum)}
                  helperText={errors.mobNum && errors.mobNum.message}
               />
               <MultiItemInput
                  name="Social media links"
                  inputMinLength={5}
                  inputMaxLength={null}
                  pattern={{
                     value: HTTP_LINK_REGEX,
                     message: "Invalid link.",
                  }}
                  sx={{ mb: 2 }}
               />
            </Grid>
         </Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "row",
               width: { xs: "100%", md: "30%" },
               m: "auto",
               justifyContent: "space-between",
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
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
               {activeStep === 4 ? "Finish" : "Next"}
            </Button>
         </Box>
      </>
   );
}

export default Step3;
