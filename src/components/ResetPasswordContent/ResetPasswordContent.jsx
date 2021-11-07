import {
   Button,
   CircularProgress,
   Divider,
   TextField,
   Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { resetPassword } from "../../helpers/api";

function ResetPasswordContent(props) {
   const { enqueueSnackbar } = useSnackbar();

   const [status, setStatus] = useState("none");
   const [token, setToken] = useState(null);
   const [message, setMessage] = useState("");

   const location = useLocation();

   useEffect(() => {
      const pathname = location.pathname;

      try {
         let resetPassToken = pathname
            .match(/(^\/reset-password\/)([^\/]*)/g)[0]
            .replace("/reset-password/", "");
         setToken(resetPassToken);
      } catch (err) {
         console.error(err);
         setToken(null);
         setStatus("failure");
         enqueueSnackbar("Invalid reset password url or token not found!", {
            variant: "error",
         });
         setMessage("Invalid reset password url or token not found!");
      }
   }, [location.pathname]);

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm({});

   const passwordRef = useRef({});
   passwordRef.current = watch("password", "");

   const onSubmit = data => {
      setStatus("loading");
      resetPassword({ token, newPassword: data.password })
         .then(response => {
            enqueueSnackbar(response.message, { variant: "success" });
            setStatus("success");
            setMessage(response.message);
         })
         .catch(err => {
            setMessage(err.message);
            console.log({ err });
            setStatus("failure");
            enqueueSnackbar(err.message, { variant: "error" });
         });
   };

   return (
      <Box
         display="flex"
         alignItems="center"
         justifyContent="center"
         flexDirection="column"
         sx={{ mt: 3, mb: 3 }}
      >
         {status === "success" && (
            <img src="svg/success-mail.svg" alt="success" className="svg" />
         )}
         {status === "failure" && (
            <img className="svg" src="svg/cancel.svg" alt="failure" />
         )}
         {status === "success" || status === "failure" ? (
            <>
               <Typography variant="h6">
                  <strong>
                     {status === "success"
                        ? "Your password updated."
                        : "Failed to update password."}
                  </strong>
               </Typography>
               <Typography
                  sx={{ pr: { xs: 2, md: 0 }, pl: { xs: 2, md: 0 } }}
                  variant="subtitle1"
               >
                  {message}
               </Typography>
            </>
         ) : (
            <>
               <Typography variant="h5">
                  <strong>Reset your Password</strong>
               </Typography>
               <Typography variant="caption" sx={{ mb: 4 }}>
                  Submit your new password here.
               </Typography>
               <Box sx={{ pr: { xs: 2, md: 0 }, pl: { xs: 2, md: 0 } }}>
                  <TextField
                     label="New password"
                     placeholder="New password"
                     fullWidth
                     sx={{ mb: 2 }}
                     type="password"
                     {...register("password", {
                        required: "This field is required.",
                        minLength: {
                           value: 8,
                           message: "Minimum 8 letters needed.",
                        },
                        maxLength: {
                           value: 24,
                           message:
                              "Maximum length is restricted to 24 letters.",
                        },
                        pattern: {
                           value: /\w\d/gi,
                           message:
                              "Password must contain alphabetic and numeric letters.",
                        },
                     })}
                     error={Boolean(errors.password)}
                     helperText={errors.password && errors.password.message}
                  ></TextField>
                  <TextField
                     label="Confirm new password"
                     placeholder="Confirm new password"
                     fullWidth
                     sx={{ mb: 2 }}
                     type="password"
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
                  ></TextField>
                  <Button
                     onClick={handleSubmit(onSubmit)}
                     variant="contained"
                     color="success"
                     fullWidth
                     disabled={status === "loading"}
                  >
                     {status === "loading" ? (
                        <CircularProgress size="24px" />
                     ) : (
                        "Submit"
                     )}
                  </Button>
               </Box>
            </>
         )}
      </Box>
   );
}

export default ResetPasswordContent;
