import { Button, Chip, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import "./MultiItemInput.css";

function MultiItemInput({
   title,
   inputMinLength = 3,
   inputMaxLength,
   pattern = null,
   sx = {},
   onItemsUpdate = newItems => null,
   error = null,
   helperText = null,
   placeholder = "",
}) {
   const [items, setItems] = useState([]);

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
      setItems(items => [...items, data.value]);
      setValue("value", "");
   };

   const removeField = indx =>
      setItems(items => items.filter((field, key) => key !== indx));

   useEffect(() => {
      onItemsUpdate(items);
   }, [items]);

   return (
      <Box
         sx={{
            border: "1px solid grey",
            borderRadius: "4px",
            p: 1,
            ":hover": {
               border: "1px solid white",
               borderColor: error ? "red" : "white",
            },
            borderColor: error ? "red" : "grey",
            ...sx,
         }}
         component="fieldset"
      >
         <legend>{title}</legend>
         <Box sx={{ mb: 1 }}>
            {items.map((field, key) => (
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
               error={Boolean(errors.value) || error}
               helperText={(errors.value && errors.value.message) || helperText}
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
               placeholder={placeholder}
            />
         </Box>
      </Box>
   );
}

export default MultiItemInput;
