import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import { Button } from "@mui/material";

const JobCard = ({ job, cardClick, profileClick, labelClick }) => {
   return (
      <Card
         sx={{
            minWidth: 250,
            borderRadius: "6px",
         }}
      >
         <CardContent
            sx={{
               cursor: "pointer",
            }}
         >
            {job.labels.map((label, index) => (
               <Button
                  color="success"
                  size="small"
                  variant="contained"
                  disableElevation
                  sx={{
                     padding: "0 6px",
                     margin: "0 5px 5px 0",
                  }}
                  onClick={() => labelClick(label)}
                  key={index}
               >
                  {label}
               </Button>
            ))}
            <Typography
               component="h1"
               color="text.primary"
               sx={{
                  marginBottom: "10px",
                  lineHeight: 1.3,
                  fontWeight: "500",
               }}
               onClick={() => cardClick(job._id)}
            >
               {job.title}
            </Typography>
            <Typography
               variant="body2"
               color="text.secondary"
               onClick={() => cardClick(job._id)}
            >
               {job.shortDescription}
            </Typography>
         </CardContent>
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
                  aria-label="recipe"
                  onClick={() => profileClick(job.userId)}
               >
                  R
               </Avatar>
            }
            title={job.user}
            titleTypographyProps={{
               sx: {
                  cursor: "pointer",
                  "&:hover": {
                     opacity: 0.8,
                  },
               },
               onClick: () => profileClick(job.userId),
            }}
            subheader={job.postedAt}
            sx={{
               bgcolor: blue[400],
            }}
         />
      </Card>
   );
};

export default JobCard;
