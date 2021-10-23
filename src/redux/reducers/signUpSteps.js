const defaultState = {
   activeStep: 0,
   userType: "",
   email: "",
   password: "",
};

const signUpStepsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case "SET_STEP":
         return { ...state, activeStep: action.payload };
      case "NEXT_STEP":
         return { ...state, activeStep: state.activeStep + 1 };
      case "BACK_STEP":
         return { ...state, activeStep: state.activeStep - 1 };
      case "SET_EMAIL":
         return { ...state, email: action.payload };
      case "SET_PASSWORD":
         return { ...state, password: action.payload };
      case "SET_USER_TYPE":
         return { ...state, userType: action.payload };
      default:
         return state;
   }
};

export default signUpStepsReducer;
