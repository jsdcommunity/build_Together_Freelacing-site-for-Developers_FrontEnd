const browserMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const darkModeReducer = (state = browserMode, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return true;
    case "LIGHT_MODE":
      return false;
    case "TOGGLE_MODE":
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
