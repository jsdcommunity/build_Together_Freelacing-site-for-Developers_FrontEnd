import React, { useEffect, useState } from "react";
import {
   Box,
   Button,
   CircularProgress,
   TextField,
   InputAdornment,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setProposalData } from "../../redux/actions/proposalData";
import { useSnackbar } from "notistack";
import { sendProposal } from "../../helpers/api/developer";

const ProposalForm = ({ backFunc, id }) => {
   const [loading, setLoading] = useState(false);
   const { jobId, description, amount, duration } = useSelector(
      state => state.proposalData
   );

   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();

   const defaultValue = {
      jobId: id,
      description: "",
      amount: "",
      duration: "",
   };

   const {
      register,
      watch,
      setValue,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         description: "",
         amount: "",
         duration: "",
      },
   });

   useEffect(() => {
      if (id === jobId) {
         setValue("description", description);
         setValue("amount", amount);
         setValue("duration", duration);
      } else {
         dispatch(setProposalData(defaultValue));
      }

      return () => {
         dispatch(setProposalData(watch()));
      };
   }, []);

   const submitForm = data => {
      setLoading(true);
      enqueueSnackbar("Sending proposal, Please wait...", { variant: "info" });
      data.jobId = id;
      sendProposal(data)
         .then(response => {
            setLoading(false);
            enqueueSnackbar(response.message, { variant: "success" });
         })
         .catch(err => {
            setLoading(false);
            enqueueSnackbar(err.message, { variant: "error" });
         });
   };

   return (
      <form noValidate onSubmit={handleSubmit(submitForm)}>
         <TextField
            label="Describe Your Proposal"
            required
            multiline
            fullWidth
            rows={6}
            size="medium"
            {...register("description", {
               required: "This field is required",
               minLength: {
                  value: 20,
                  message: "Too short! must be 20 characters long",
               },
               maxLength: {
                  value: 350,
                  message: "Too long! must be less than 350 characters",
               },
            })}
            error={Boolean(errors.description)}
            helperText={errors?.description?.message}
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
                  required
                  InputProps={{
                     startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                     ),
                  }}
                  {...register("amount", {
                     required: "This field is required",
                     pattern: {
                        value: /^[0-9]*$/,
                        message: "Invalid amount typed.",
                     },
                     minLength: {
                        value: 2,
                        message: "Too low! must be 2 digit long",
                     },
                     maxLength: {
                        value: 10,
                        message: "Too high! must be less than 10 digits",
                     },
                  })}
                  error={Boolean(errors.amount)}
                  helperText={errors?.amount?.message}
                  sx={{ mr: 2, mb: 2 }}
               />
               <TextField
                  label="Expected Duration"
                  required
                  {...register("duration", {
                     required: "This field is required",
                     minLength: {
                        value: 2,
                        message: "Too short! must be 2 characters long",
                     },
                     maxLength: {
                        value: 8,
                        message: "Too long! must be less than 8 characters",
                     },
                  })}
                  error={Boolean(errors.duration)}
                  helperText={errors?.duration?.message}
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
               <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
               >
                  {!loading ? "Submit" : <CircularProgress size="25px" />}
               </Button>
            </Box>
         </Box>
      </form>
   );
};

export default ProposalForm;
