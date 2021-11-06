const initialState = [];

const jobsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_JOBS":
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default jobsReducer;