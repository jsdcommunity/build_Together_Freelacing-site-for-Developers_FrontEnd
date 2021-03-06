import { Divider, Step, StepLabel, Stepper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Finish from "./Finish";

const steps = [
   "Choose your user type",
   "Enter your basic details",
   "Update your profile",
];

function SignUpSteps(props) {
   const { activeStep } = useSelector(state => state.signUpSteps);

   const RenderStep = ({ activeStep }) => {
      switch (activeStep) {
         case 0:
            return <Step1 />;
         case 1:
            return <Step2 />;
         case 2:
            return <Step3 />;
         default:
            return null;
      }
   };

   return (
      <Box
         sx={{
            width: "100%",
            pr: { md: 12, xs: 1.5 },
            pl: { md: 12, xs: 1.5 },
            pt: 5,
            pb: 5,
         }}
      >
         <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
               const stepProps = {};
               const labelProps = {};
               return (
                  <Step key={label} {...stepProps}>
                     <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
               );
            })}
         </Stepper>
         <Divider sx={{ mt: 2 }} />

         {activeStep === steps.length ? (
            <Finish />
         ) : (
            <RenderStep activeStep={activeStep} />
         )}
      </Box>
   );
}

export default SignUpSteps;
