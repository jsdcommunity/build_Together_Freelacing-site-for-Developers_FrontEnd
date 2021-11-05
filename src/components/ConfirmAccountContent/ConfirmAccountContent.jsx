import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { CircularProgress, Typography, Link } from "@mui/material";
import { confirmAccount, getUserData } from "../../helpers/api";
import { useSnackbar } from "notistack";
import { saveUserAuth } from "../../helpers";
import { Link as RouterLink } from "react-router-dom";
import "./ConfirmAccountContent.css";
import { useDispatch } from "react-redux";
import {
   setActiveStep,
   setEmail,
   setUserType,
} from "../../redux/actions/signUpSteps";
import { useHistory } from "react-router-dom";
import JWT from "jsonwebtoken";

function ConfirmAccountContent(props) {
   const history = useHistory();
   const dispatch = useDispatch();

   const [status, setStatus] = useState("loading");
   const [message, setMessage] = useState("Processing the token...");

   const { enqueueSnackbar } = useSnackbar();

   useEffect(() => {
      let search = window.location.search;
      let params = new URLSearchParams(search);
      let token = params.get("token");
      confirmAccount(token)
         .then(resData => {
            const userToken = resData.token;
            const { userType, active, userId } = JWT.decode(userToken);

            saveUserAuth(userToken);
            getUserData(userId).then(response => {
               const userData = response.user;
               dispatch(setUserType(userData.userType));
               dispatch(setEmail(userData.email));
               dispatch(setActiveStep(2));
            });

            setStatus("success");
            setMessage(resData.message);
            enqueueSnackbar(resData.message, { variant: "success" });
            setTimeout(() => history.push("/sign-up"), 4000);
         })
         .catch(err => {
            setStatus("failure");
            setMessage(err.message);
            enqueueSnackbar(err.message, { variant: "error" });
         });
   }, []);

   const RenderIntructions = ({ message }) => {
      switch (message) {
         case "Email already confirmed!":
            return (
               <ul>
                  <li>This email is already confirmed.</li>
                  <li>
                     You can do{" "}
                     <Link to="/login" component={RouterLink}>
                        login
                     </Link>{" "}
                     now!
                  </li>
                  <li>
                     If all the above instructions are wrong, check the entered
                     email
                  </li>
               </ul>
            );
         case "Link expired!":
            return (
               <ul>
                  <li>
                     This confimation link is expired ( Confirmation links will
                     expire after 15 minutes )
                  </li>
                  <li>
                     Please{" "}
                     <Link to="/sign-up" component={RouterLink}>
                        sign up
                     </Link>{" "}
                     again with this email, and get new confirmation link
                  </li>
                  <li>
                     And remember, next time you get the link, please confirm
                     the account before the link expires.
                  </li>
               </ul>
            );
         case "Invalid token!":
            return (
               <ul>
                  <li>
                     Please use the correct confirmation link that we sed you in
                     your email address
                  </li>
                  <li>Check the link, verify it's not broken.</li>
                  <li>
                     Is the above instructions are't working, please sign up
                     again and get your new confirmation link!
                  </li>
               </ul>
            );
         case "Email confirmed successfully!":
            return (
               <ul>
                  <li>
                     You will be redirected to{" "}
                     <Link to="/sign-up" component={RouterLink}>
                        sign up
                     </Link>{" "}
                     step two now, please wait...
                  </li>
                  <li>
                     If not redirecting, try to go manually to{" "}
                     <Link to="/sign-up" component={RouterLink}>
                        sign up
                     </Link>{" "}
                     page.
                  </li>
               </ul>
            );
         default:
            return null;
      }
   };

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
               <img src="svg/success-mail.svg" alt="success" className="svg" />
            )}
            {status === "failure" && (
               <img className="svg" src="svg/cancel.svg" alt="failure" />
            )}
            {status === "loading" && (
               <CircularProgress size="4rem" sx={{ mb: 2 }} />
            )}
            <Typography variant="h6">
               <strong>{message}</strong>
            </Typography>
            <Box
               maxWidth={{ xs: "100%", sm: "100%" }}
               sx={{ textAlign: "left", pt: 1 }}
            >
               <RenderIntructions message={message} />
            </Box>
         </Box>
      </Box>
   );
}

export default ConfirmAccountContent;
