const nextStep = () => Promise.resolve({ type: "NEXT_STEP" });

const backStep = () => Promise.resolve({ type: "BACK_STEP" });

const setActiveStep = stepIndx =>
   Promise.resolve({ type: "SET_STEP", payload: stepIndx });

const setEmail = email =>
   Promise.resolve({ type: "SET_EMAIL", payload: email });

const setPassword = password =>
   Promise.resolve({ type: "SET_PASSWORD", payload: password });

const setUserType = userType =>
   Promise.resolve({ type: "SET_USER_TYPE", payload: userType });

export {
   nextStep,
   setEmail,
   setUserType,
   setActiveStep,
   setPassword,
   backStep,
};
