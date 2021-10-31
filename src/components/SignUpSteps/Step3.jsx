import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../../redux/actions/signUpSteps";
import { HTTP_LINK_REGEX } from "../../utils/constants";

const DynamicInput = ({ name, inputMinLength = 3, inputMaxLength }) => {
   const [fields, setFields] = useState([]);

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm({
      mode: "onChange",
   });

   const valueRef = useRef({});
   valueRef.current = watch("value");

   const handleAddClick = data => {
      setFields(fields => [...fields, data.value]);
      valueRef.current = "";
   };

   const removeField = indx =>
      setFields(fields => fields.filter((field, key) => key !== indx));

   return (
      <Box
         sx={{
            border: "1px solid grey",
            borderRadius: "4px",
            p: 1,
            ":hover": {
               border: "1px solid white",
            },
         }}
         component="fieldset"
      >
         <legend>{name}</legend>
         <Box sx={{ mb: 1 }}>
            {fields.map((field, key) => (
               <Chip
                  sx={{ m: 0.5 }}
                  label={field}
                  variant="outlined"
                  onDelete={() => removeField(key)}
                  key={key}
               />
            ))}
         </Box>
         <Box>
            <TextField
               size="small"
               fullWidth
               {...register("value", {
                  required: false,
                  minLength: inputMinLength && {
                     value: inputMinLength,
                     message: `Minimum ${inputMinLength} letters needed.`,
                  },
                  maxLength: {
                     value: inputMaxLength,
                     message: `Maximum length is restricted to ${inputMaxLength} letters.`,
                  },
                  pattern: {
                     value: HTTP_LINK_REGEX,
                     message: "Invalid link.",
                  },
               })}
               error={Boolean(errors.value)}
               helperText={errors.value && errors.value.message}
               InputProps={{
                  endAdornment: (
                     <Button
                        onClick={handleSubmit(handleAddClick)}
                        sx={{ textTransform: "none" }}
                        variant="contained"
                     >
                        Add
                     </Button>
                  ),
                  sx: { pr: "2px" },
               }}
            />
         </Box>
      </Box>
   );
};

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
               <DynamicInput
                  name="Social media links"
                  inputMinLength={8}
                  inputMaxLength={null}
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
