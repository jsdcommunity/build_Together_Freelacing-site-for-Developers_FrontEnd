import React, { useEffect, useState } from 'react'
import Masonry from "@mui/lab/Masonry";
import JobCard from "../JobCard/JobCard";
import { Typography, Container, CircularProgress, } from "@mui/material";

import jobsArray from '../../utils/jobs';

const ExploreContent = () => {
    const [jobs, setJobs] = useState([]);
    const [status, setStatus] = useState("success");
    const [showJob, setShowJob] = useState(false);
 
    useEffect(() => {
       // calling for all jobs api and set to state
       setJobs(jobsArray);
    }, []);
 
    const handlePopUp = id => {
       setShowJob(true);
       console.log(showJob);
       console.log(id);
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
            {
                status === "success" && jobs.length ?
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
                                cardClick={handlePopUp}
                                labelClick={labelSearch}
                                profileClick={goToProfile}
                            />
                        ))}
                    </Masonry>
                :
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
                        {
                            status === "loading" ?
                                <CircularProgress size="4rem" sx={{ mb: 2 }} />
                            :
                                <>
                                    <img className="svg" src="svg/cancel.svg" alt="failure" />
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        No active jobs for right now! check back later..
                                    </Typography>
                                </>
                        }
                    </Container>
            }
        </>
    )
}

export default ExploreContent
