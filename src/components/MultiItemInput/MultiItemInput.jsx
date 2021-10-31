import { Button, Chip, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import "./MultiItemInput.css";

function MultiItemInput({
   name,
   inputMinLength = 3,
   inputMaxLength,
   pattern = null,
   sx = {},
}) {
   const [fields, setFields] = useState([]);

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue,
   } = useForm({
      mode: "onChange",
   });

   const valueRef = useRef({});
   valueRef.current = watch("value");

   const handleAddClick = data => {
      setFields(fields => [...fields, data.value]);
      setValue("value", "");
   };

   const removeField = indx =>
      setFields(fields => fields.filter((field, key) => key !== indx));

   return (
      <Box
         sx={{
            border: "1px solid grey",
            borderRadius: "4px",
            p: 1,
            ":hover": {
               border: "1px solid white",
            },
            ...sx,
         }}
         component="fieldset"
      >
         <legend>{name}</legend>
         <Box sx={{ mb: 1 }}>
            {fields.map((field, key) => (
               <Chip
                  sx={{ m: 0.5 }}
                  label={field}
                  variant="outlined"
                  onDelete={() => removeField(key)}
                  key={key}
               />
            ))}
         </Box>
         <Box>
            <TextField
               size="small"
               fullWidth
               {...register("value", {
                  required: false,
                  minLength: inputMinLength && {
                     value: inputMinLength,
                     message: `Minimum ${inputMinLength} letters needed.`,
                  },
                  maxLength: inputMaxLength && {
                     value: inputMaxLength,
                     message: `Maximum length is restricted to ${inputMaxLength} letters.`,
                  },
                  pattern: pattern || undefined,
               })}
               value={valueRef.current}
               error={Boolean(errors.value)}
               helperText={errors.value && errors.value.message}
               InputProps={{
                  endAdornment: (
                     <Button
                        onClick={handleSubmit(handleAddClick)}
                        sx={{ textTransform: "none" }}
                        variant="contained"
                     >
                        <AddIcon />
                     </Button>
                  ),
                  sx: { pr: "2px" },
               }}
            />
         </Box>
      </Box>
   );
}

export default MultiItemInput;
