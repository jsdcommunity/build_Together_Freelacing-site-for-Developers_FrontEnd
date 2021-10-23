import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { backStep, nextStep } from "../../redux/actions/signUpSteps";

function Step3(props) {
   const dispatch = useDispatch();
   const { activeStep } = useSelector(state => state.signUpSteps);

   const handleNext = () => {
      dispatch(nextStep());
   };

   const handleBack = () => {
      dispatch(backStep());
   };
   return (
      <>
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
            <Button onClick={handleNext} variant="contained">
               {activeStep === 4 ? "Finish" : "Next"}
            </Button>
         </Box>
      </>
   );
}

export default Step3;
