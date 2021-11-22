import React from "react";
import { Box, Button, TextField } from "@mui/material";

const ProposalForm = ({ backFunc, jobId }) => {
   const submitForm = e => {
      e.preventDefault();
      console.log("Hi");
   };

   return (
      <form action="" onSubmit={submitForm}>
         <TextField
            label="Describe Your Proposal"
            required
            multiline
            fullWidth
            rows={6}
            size="medium"
            name="description"
            sx={{ mt: "10px" }}
         />
         <Box
            sx={{
               marginTop: "20px",
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <Box>
               <TextField
                  label="Expected amount"
                  name="amount"
                  sx={{ mr: 2, mb: 2 }}
               />
               <TextField
                  label="Expected Duration"
                  required
                  value={jobId}
                  name="duration"
               />
            </Box>
            <Box sx={{ mt: 2 }}>
               <Button
                  color="info"
                  disableElevation
                  sx={{
                     mr: "8px",
                  }}
                  onClick={backFunc}
               >
                  Back
               </Button>
               <Button variant="contained" color="primary" type="submit">
                  Submit
               </Button>
            </Box>
         </Box>
      </form>
   );
};

export default ProposalForm;
