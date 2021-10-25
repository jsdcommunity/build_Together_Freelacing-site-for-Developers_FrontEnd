import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { CircularProgress, Paper, Typography } from "@mui/material";
import { confirmAccount } from "../../helpers/api";
import { useSnackbar } from "notistack";
import ErrorIcon from "@mui/icons-material/Error";
import { saveUserAuth } from "../../helpers";

function ConfirmAccountContent(props) {
   const [status, setStatus] = useState("loading");
   const [message, setMessage] = useState("Processing the token...");

   const { enqueueSnackbar } = useSnackbar();

   useEffect(() => {
      let search = window.location.search;
      let params = new URLSearchParams(search);
      let token = params.get("token");
      confirmAccount(token)
         .then(resData => {
            saveUserAuth(resData.token);
            setStatus("success");
            setMessage(resData.message);
            enqueueSnackbar(resData.message, { variant: "success" });
         })
         .catch(err => {
            setStatus("failure");
            setMessage(err.message);
            enqueueSnackbar(err.message, { variant: "error" });
         });
   }, []);

   const iconSXProp = { fontSize: "6rem", mb: 2 };

   return (
      <Box
         display="flex"
         alignItems="center"
         justifyContent="center"
         flexDirection="column"
         sx={{ mt: 3, mb: 3 }}
      >
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               flexDirection: "column",
               p: { xs: 3, sm: 5 },
            }}
         >
            {status === "success" && (
               <CheckCircleRoundedIcon color="success" sx={iconSXProp} />
            )}
            {status === "failure" && (
               <ErrorIcon color="error" sx={iconSXProp} />
            )}
            {status === "loading" && (
               <CircularProgress size="4rem" sx={{ mb: 2 }} />
            )}
            <Typography variant="h5">
               <strong>{message}</strong>
            </Typography>
         </Box>
      </Box>
   );
}

export default ConfirmAccountContent;
