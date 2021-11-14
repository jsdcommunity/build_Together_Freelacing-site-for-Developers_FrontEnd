import {
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from "@mui/material";
import React from "react";

function ServiceCard({ ...item }) {
   return (
      <>
         <Card
            sx={{
               maxWidth: "280px",
               boxShadow: 3,
               height: "180px",
               borderRadius: "10px",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               cursor: "pointer",
               m: 2,
               p: 2,
            }}
         >
            <CardMedia
               component="img"
               image={item.bgImg}
               alt="green iguana"
               sx={{ width: "150px", alignItems: "center" }}
            />

            <CardContent>
               <Typography
                  textAlign="center"
                  sx={{ fontWeight: "700" }}
                  variant="subtitle1"
                  color="GrayText"
               >
                  {item.txt}
               </Typography>
            </CardContent>
         </Card>
      </>
   );
}

export default ServiceCard;
