const defaultState = { jobId: "", description: "", amount: "", duration: "" };

const proposalDataReducer = (state = defaultState, action) => {
   switch (action.type) {
      case "SET_PROPOSAL_DATA":
         return { ...state, ...action.payload };

      default:
         return state;
   }
};

export default proposalDataReducer;
