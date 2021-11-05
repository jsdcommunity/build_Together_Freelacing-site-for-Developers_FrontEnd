import Cookies from "universal-cookie";
const cookies = new Cookies();

const saveUserAuth = userAuth => cookies.set("user-auth", userAuth);

const getUserAuth = () => cookies.get("user-auth");

export { saveUserAuth, getUserAuth };
