import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red, green } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

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
   closeFunc = () => null,
   jobData = {},
   profileClick = id => null,
}) => {
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
                     aria-label={jobData?.user}
                     onClick={() => profileClick(jobData)}
                     src={jobData?.userData?.profileImageUrl}
                     alt={jobData?.userData?.fullName}
                  >
                     {jobData?.userData?.fullName}
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
               title={jobData?.userData?.fullName}
               titleTypographyProps={{
                  sx: {
                     cursor: "pointer",
                     "&:hover": {
                        opacity: 0.8,
                     },
                  },
                  onClick: () => profileClick(jobData?.userData._id),
               }}
               subheader={moment(jobData?.createdAt).fromNow()}
               sx={{
                  bgcolor: green[400],
               }}
            />
            <CardContent>
               <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{
                     marginBottom: "10px",
                     lineHeight: 1.3,
                     fontWeight: "500",
                  }}
               >
                  {jobData?.title}
               </Typography>
               <Typography variant="body1">Short Description</Typography>
               <Typography
                  sx={{ mb: 2 }}
                  variant="body2"
                  color="text.secondary"
               >
                  {jobData?.shortDescription}
               </Typography>
               <Typography variant="body1">Description</Typography>
               <Typography
                  sx={{ mb: 2 }}
                  variant="body2"
                  color="text.secondary"
               >
                  {jobData?.description}
               </Typography>
               <Box
                  sx={{
                     marginTop: "10px",
                     display: "flex",
                     justifyContent: "space-between",
                  }}
               >
                  <Typography
                     variant="h4"
                     sx={{
                        fontSize: "1.7rem",
                        mt: 2,
                     }}
                  >
                     <strong>${jobData.budget}</strong>
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                     <Button
                        color="error"
                        disableElevation
                        sx={{
                           mr: "8px",
                        }}
                     >
                        Report
                     </Button>
                     <Button variant="contained" color="primary">
                        Send Proposal
                     </Button>
                  </Box>
               </Box>
            </CardContent>
         </Card>
      </Modal>
   );
};

export default JobDetailsModal;
