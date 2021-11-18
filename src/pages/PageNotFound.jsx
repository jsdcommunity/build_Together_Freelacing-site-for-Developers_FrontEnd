import React from "react";
import { Typography, Box } from "@mui/material";

const PageNotFound = () => {
   return (
      <Box
         style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "10px",
         }}
      >
         <img
            className="svg"
            src="svg/page-not-found.svg"
            alt="Page Not Found"
         />
         <Typography
            variant="h3"
            sx={{
               textAlign: "center",
               fontSize: "1.9rem",
            }}
         >
            Page Not Found
         </Typography>
      </Box>
   );
};

export default PageNotFound;
