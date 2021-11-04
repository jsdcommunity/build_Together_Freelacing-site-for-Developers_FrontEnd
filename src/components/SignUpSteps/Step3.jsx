import {
   Button,
   CircularProgress,
   Grid,
   TextField,
   Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveUserAuth } from "../../helpers";
import { updateUserProfile } from "../../helpers/api";
import { backStep, nextStep } from "../../redux/actions/signUpSteps";
import { HTTP_LINK_REGEX } from "../../utils/constants";
import MultiItemInput from "../MultiItemInput/MultiItemInput";

function Step3(props) {
   const [uploading, setUploading] = useState(false);

   const dispatch = useDispatch();

   const { activeStep, password, email, userType } = useSelector(
      state => state.signUpSteps
   );

   const { enqueueSnackbar } = useSnackbar();

   const onSubmit = data => {
      if (uploading) return null;
      setUploading(true);
      updateUserProfile(data)
         .then(response => {
            saveUserAuth(response.token);
            setUploading(false);
            enqueueSnackbar(response.message, { variant: "success" });
            dispatch(nextStep());
         })
         .catch(err => {
            setUploading(false);
            enqueueSnackbar(err.message, { variant: "error" });
         });
   };

   const handleBack = () => {
      dispatch(backStep());
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue,
   } = useForm({
      defaultValues: {
         email: email || "",
         password: password || "",
      },
      mode: "all",
   });

   const fullNameRef = useRef({});
   fullNameRef.current = watch("fullName", "");

   const isUserDeveloper = userType === "developer" ? true : false;

   const [socialMedias, setSocialMedias] = useState([]);
   const [projects, setProjects] = useState([]);
   const [skills, setSkills] = useState([]);
   const [experience, setExperience] = useState([]);

   useEffect(() => {
      register("socialMedias", {
         max: {
            value: 15,
            message: "Maximum 15 links allowed!",
         },
      });
      register("projects", {
         required: isUserDeveloper && {
            value: isUserDeveloper,
            message: "Add atleast one item!",
         },
         min: {
            value: 1,
            message: "Add atleast one item!",
         },
         shouldUnregister: true,
      });
      register("experience", {
         required: isUserDeveloper && {
            value: isUserDeveloper,
            message: "Add atleast one item!",
         },
         min: {
            value: 1,
            message: "Add atleast one item!",
         },
         shouldUnregister: true,
      });
      register("skills", {
         required: isUserDeveloper && {
            value: isUserDeveloper,
            message: "Add atleast one item!",
         },
         min: {
            value: 1,
            message: "Add atleast one item!",
         },
         shouldUnregister: true,
      });
   });

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
                  placeholder="John due"
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
                  placeholder="London, England, United Kingdom"
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
                  placeholder="Hi there! I am a some...."
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
                  placeholder="+911234567890"
               />
               <MultiItemInput
                  title="Social media links"
                  inputMinLength={5}
                  inputMaxLength={null}
                  pattern={{
                     value: HTTP_LINK_REGEX,
                     message: "Invalid link.",
                  }}
                  sx={{ mb: 2 }}
                  onItemsUpdate={newItems => {
                     setSocialMedias(newItems);
                     setValue("socialMedias", newItems);
                  }}
                  error={Boolean(errors.socialMedias)}
                  helperText={
                     errors.socialMedias && errors.socialMedias.message
                  }
                  placeholder="https://instagram.com/jsdcommunity"
               />
               {userType === "developer" && (
                  <MultiItemInput
                     title="Project links *"
                     inputMinLength={5}
                     inputMaxLength={null}
                     pattern={{
                        value: HTTP_LINK_REGEX,
                        message: "Invalid link.",
                     }}
                     sx={{ mb: 2 }}
                     onItemsUpdate={newItems => {
                        setProjects(newItems);
                        setValue("projects", newItems);
                     }}
                     error={Boolean(errors.projects)}
                     helperText={errors.projects && errors.projects.message}
                     placeholder="https://github.com/jsdcommunity/static-website"
                  />
               )}

               {userType === "developer" && (
                  <MultiItemInput
                     title="Skills *"
                     inputMinLength={1}
                     inputMaxLength={null}
                     sx={{ mb: 2 }}
                     onItemsUpdate={newItems => {
                        setSkills(newItems);
                        setValue("skills", newItems);
                     }}
                     error={Boolean(errors.skills)}
                     helperText={errors.skills && errors.skills.message}
                     placeholder="HTML, CSS, Javascript, React"
                  />
               )}
               {userType === "developer" && (
                  <MultiItemInput
                     title="Experience *"
                     inputMinLength={5}
                     inputMaxLength={null}
                     sx={{ mb: 2 }}
                     onItemsUpdate={newItems => {
                        setExperience(newItems);
                        setValue("experience", newItems);
                     }}
                     error={Boolean(errors.experience)}
                     helperText={errors.experience && errors.experience.message}
                     placeholder="Worked as a web developer for 8 years....."
                  />
               )}
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
               {uploading ? (
                  <CircularProgress color="info" size="24px" />
               ) : (
                  "Update and Finish"
               )}
            </Button>
         </Box>
      </>
   );
}

export default Step3;
