import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../../../helpers/api";
import { setJobs } from "../../../redux/actions/jobs";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import JobCard from "../../JobCard/JobCard";
import { CircularProgress, Container, Typography } from "@mui/material";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function RecentJobs() {
   const [status, setStatus] = useState("loading");
   const dispatch = useDispatch();
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
            });
   }, []);

   return (
      <div style={{ margin: "2rem" }}>
         <h2 style={{ fontSize: "25px", paddingBottom: "1rem" }}>
            Recently posted jobs
         </h2>
         {status === "success" && jobs.length ? (
            <Swiper
               // install Swiper modules
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               spaceBetween={10}
               slidesPerView={4}
               navigation
               breakpoints={{
                  // when window width is >= 0px
                  0: {
                     slidesPerView: 1,
                     spaceBetween: 0,
                  },
                  320: {
                     slidesPerView: 1,
                     spaceBetween: 10,
                  },
                  // when window width is >= 400px
                  400: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  // when window width is >= 640px
                  640: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                  },
                  // when window width is >= 1142px
                  1142: {
                     slidesPerView: 4,
                     spaceBetween: 20,
                  },
               }}
               onSwiper={swiper => console.log(swiper)}
               onSlideChange={() => console.log("slide change")}
            >
               {jobs.map((job, key) => (
                  <SwiperSlide>
                     <JobCard {...job} key={key} jobId={job._id} />
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            <Container
               style={{
                  height: "100px",
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
      </div>
   );
}

export default RecentJobs;
