import Cookies from "universal-cookie";
const cookies = new Cookies();

const saveUserAuth = userAuth => cookies.set("user-auth", userAuth);

export { saveUserAuth };
