const nextStep = () => ({ type: "NEXT_STEP" });

const backStep = () => ({ type: "BACK_STEP" });

const setActiveStep = stepIndx => ({ type: "BACK_STEP", payload: stepIndx });

const setEmail = email => ({ type: "SET_EMAIL", payload: email });

const setPassword = password => ({ type: "SET_PASSWORD", payload: password });

const setUserType = userType => ({ type: "SET_USER_TYPE", payload: userType });

export {
   nextStep,
   setEmail,
   setUserType,
   setActiveStep,
   setPassword,
   backStep,
};
