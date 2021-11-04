import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setActiveStep } from "../../redux/actions/signUpSteps";

function Finish(props) {
   const dispatch = useDispatch();

   const history = useHistory();

   useEffect(() => {
      dispatch(setActiveStep(0));
      history.push("/");
   }, []);

   return (
      <Box
         display="flex"
         alignItems="center"
         justifyContent="center"
         flexDirection="column"
         sx={{ mt: 3, mb: 3 }}
      >
         <Typography sx={{ mt: 2, mb: 1, m: "auto" }} variant="h5">
            <strong>All steps completed - you&apos;re finished</strong>
         </Typography>
         <Typography variant="caption" sx={{ m: "auto", mb: 1 }}>
            You will be redirected to your dashboard soon.
         </Typography>
      </Box>
   );
}

export default Finish;
