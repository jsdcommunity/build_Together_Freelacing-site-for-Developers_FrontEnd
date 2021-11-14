import React, { useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import JobCard from "../JobCard/JobCard";
import { Typography, Container, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import JobDetailsModal from "../JobDetailsModal/JobDetailsModal";
import { getJobs } from "../../helpers/api";
import { setJobs } from "../../redux/actions/jobs";

const ExploreContent = () => {
   const [status, setStatus] = useState("loading");
   const [showModal, setShowModal] = useState([]);
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();
   const jobs = useSelector(state => state.jobs);

   useEffect(() => {
      // calling for all jobs api and set to state
      if (!jobs.length)
         getJobs()
            .then(response => {
               dispatch(setJobs(response.jobs));
               setStatus("success");
            })
            .catch(err => {
               setStatus("failure");
               enqueueSnackbar(err.message, { variant: "error" });
            });
   }, []);

   const handleModal = id => {
      const job = jobs.filter(job => job._id === id);
      setShowModal(job);
   };

   const labelSearch = label => {
      // search jobs with label name
      console.log(label);
   };

   const goToProfile = id => {
      // redirect to author profile
      console.log(id);
   };

   return (
      <>
         <JobDetailsModal
            isOpen={Boolean(showModal.length)}
            closeFunc={() => setShowModal([])}
            jobData={showModal[0]}
            profileClick={goToProfile}
         />
         {status === "success" && jobs.length ? (
            <Masonry
               columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
               spacing={2}
               sx={{
                  margin: 0,
                  alignItems: "center",
               }}
            >
               {jobs.map((job, key) => (
                  <JobCard
                     {...job}
                     key={key}
                     cardClick={handleModal}
                     labelClick={labelSearch}
                     profileClick={goToProfile}
                     jobId={job._id}
                  />
               ))}
            </Masonry>
         ) : (
            <Container
               style={{
                  height: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "10px",
               }}
            >
               {status === "loading" ? (
                  <CircularProgress size="3rem" sx={{ mb: 2 }} />
               ) : (
                  <>
                     <img className="svg" src="svg/empty.svg" alt="Empty" />
                     <Typography
                        variant="h4"
                        sx={{
                           textAlign: "center",
                           fontSize: "1.5rem",
                        }}
                     >
                        No active jobs for right now! check back later..
                     </Typography>
                  </>
               )}
            </Container>
         )}
      </>
   );
};

export default ExploreContent;
