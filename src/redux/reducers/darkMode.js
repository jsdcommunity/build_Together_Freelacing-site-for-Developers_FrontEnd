const browserMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const darkModeReducer = (state = browserMode, action) => {
   switch (action.type) {
      case "TOGGLE_MODE":
         return !state;
      default:
         return state;
   }
};

export default darkModeReducer;
