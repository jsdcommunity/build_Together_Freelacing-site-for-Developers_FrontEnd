const initialState = [];

const testimonialReducer = (state = initialState ,action) =>{
    switch (action.type) {
        case "SET_TESTIMONIAL":
            return [...state,...action.payload]
           
        default:
           return state
    }
}


export default testimonialReducer ;