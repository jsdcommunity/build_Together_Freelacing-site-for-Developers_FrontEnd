import React, { useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import JobCard from "../JobCard/JobCard";
import { Typography, Container, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import JobDetailsModal from "../JobDetailsModal/JobDetailsModal";
import { getJobs } from "../../helpers/api";
import { setJobs } from "../../redux/actions/jobs";

import jobsArray from "../../utils/jobs";

const ExploreContent = () => {
   const [status, setStatus] = useState("loading");
   const [showModal, setShowModal] = useState([]);
   const dispatch = useDispatch();
   const jobs = useSelector(state => state.jobs);

   useEffect(() => {
      // calling for all jobs api and set to state
      if (!jobs.length)
         // getJobs()
         // 	.then(data => {
         // 		dispatch(setJobs(data.jobs));
         // 		setStatus("success");
         // 	})
         // 	.catch(err => {
         // 		setStatus("failure");
         // 	})
         dispatch(setJobs(jobsArray));
      setStatus("success");
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
            data={showModal}
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
               {jobs.map(job => (
                  <JobCard
                     key={job._id}
                     job={job}
                     cardClick={handleModal}
                     labelClick={labelSearch}
                     profileClick={goToProfile}
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
                  <CircularProgress size="4rem" sx={{ mb: 2 }} />
               ) : (
                  <>
                     <img className="svg" src="svg/cancel.svg" alt="failure" />
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
