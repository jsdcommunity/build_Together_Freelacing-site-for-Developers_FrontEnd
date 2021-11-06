const setJobs = (jobs) => 
    Promise.resolve({
        type: "SET_JOBS",
        payload: jobs,
    });

export {
    setJobs,
};