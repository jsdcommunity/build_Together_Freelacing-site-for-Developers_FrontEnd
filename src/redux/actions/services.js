const setServices = service =>
   Promise.resolve({
      type: "SET_SERVICES",
      payload: service,
   });

export { setServices };
