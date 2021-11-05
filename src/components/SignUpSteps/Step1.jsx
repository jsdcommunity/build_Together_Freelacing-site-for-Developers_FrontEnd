import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   backStep,
   nextStep,
   setUserType,
} from "../../redux/actions/signUpSteps";

function Step1() {
   const dispatch = useDispatch();
   const { activeStep, userType } = useSelector(state => state.signUpSteps);

   const handleNext = () => {
      dispatch(nextStep());
   };

   const handleBack = () => {
      dispatch(backStep());
   };

   const UserTypeCard = ({ type }) => {
      const Card = ({ title, description, userType: userIs }) => (
         <Grid
            sx={{ p: { md: 5, xs: 1 }, pt: 1, pb: 1 }}
            item
            xs={12}
            sm={6}
            md={6}
         >
            <Paper
               sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor:
                     userType === userIs ? "success.light" : "background.paper",
                  color: userType === userIs ? "black" : "inherit",
               }}
            >
               <Typography variant="h6">{title}</Typography>
               <Divider sx={{ m: 1 }} />
               <Typography variant="body1">{description}</Typography>
               <Box display="flex" flexDirection="column" alignItems="flex-end">
                  <Button
                     sx={{ textTransform: "none", mt: 2 }}
                     variant="contained"
                     color="info"
                     onClick={() => {
                        dispatch(setUserType(userIs));
                     }}
                  >
                     I'm a {userIs}
                  </Button>
               </Box>
            </Paper>
         </Grid>
      );

      switch (type) {
         case "developer":
            return (
               <Card
                  title="For Developer"
                  description={`A computer programmer, sometimes called a software developer,
                     a programmer or more recently a coder,
                     is a person who creates computer software.
                     The term computer programmer can refer to a specialist in one area of computers
                     or to a generalist who writes code for many kinds of software.`}
                  userType="developer"
               />
            );
         case "buyer":
            return (
               <Card
                  title="For Buyer"
                  description={`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Nulla repudiandae sequi culpa. Adipisci unde quia,
                     vero odio magnam fugit iure laborum ratione animi repellendus nihil?
                     Sapiente molestiae voluptatibus iure nesciunt.`}
                  userType="buyer"
               />
            );
         default:
            return null;
      }
   };

   return (
      <>
         <Box>
            <Box
               sx={{ mt: 2, mb: 2 }}
               display="flex"
               alignItems="center"
               flexDirection="column"
            >
               <Typography variant="h4">
                  <strong>Sign up</strong>
               </Typography>
               <Typography variant="caption">Choose your user type!</Typography>
            </Box>
            <Grid container>
               <UserTypeCard type="buyer" />
               <UserTypeCard type="developer" />
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
            <Button
               disabled={[...userType].length < 4}
               onClick={handleNext}
               variant="contained"
            >
               {activeStep === 4 ? "Finish" : "Next"}
            </Button>
         </Box>
      </>
   );
}

export default Step1;
