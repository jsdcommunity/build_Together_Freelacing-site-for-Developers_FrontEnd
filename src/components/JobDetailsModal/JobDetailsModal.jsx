import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red, green } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "70%",
   minWidth: 250,
   maxWidth: 1000,
   borderRadius: "6px",
};

const JobDetailsModal = ({
   isOpen = false,
   closeFunc,
   data = [],
   profileClick,
}) => {
   const job = data[0];

   return (
      <Modal open={isOpen} onClose={closeFunc}>
         <Card sx={style}>
            <CardHeader
               avatar={
                  <Avatar
                     sx={{
                        bgcolor: red[500],
                        cursor: "pointer",
                        "&:hover": {
                           bgcolor: red[600],
                        },
                     }}
                     aria-label={job?.user}
                     onClick={() => profileClick(job?.userId)}
                  >
                     R
                  </Avatar>
               }
               action={
                  <CloseIcon
                     onClick={closeFunc}
                     sx={{
                        cursor: "pointer",
                        fontSize: "2rem",
                        "&:hover": {
                           opacity: 0.6,
                        },
                     }}
                  />
               }
               title={job?.user}
               titleTypographyProps={{
                  sx: {
                     cursor: "pointer",
                     "&:hover": {
                        opacity: 0.8,
                     },
                  },
                  onClick: () => profileClick(job?.userId),
               }}
               subheader={job?.postedAt}
               sx={{
                  bgcolor: green[400],
               }}
            />
            <CardContent>
               <Typography
                  component="h1"
                  color="text.primary"
                  sx={{
                     marginBottom: "10px",
                     lineHeight: 1.3,
                     fontWeight: "500",
                  }}
               >
                  {job?.title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {job?.shortDescription}
               </Typography>
            </CardContent>
         </Card>
      </Modal>
   );
};

export default JobDetailsModal;
