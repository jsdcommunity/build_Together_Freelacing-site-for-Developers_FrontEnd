import Cookies from "universal-cookie";
const cookies = new Cookies();

const saveUserAuth = userAuth => cookies.set("user-auth", userAuth);

const getUserAuth = () => cookies.get("user-auth");

const clearUserAuth = () => cookies.remove("user-auth");

export { saveUserAuth, getUserAuth, clearUserAuth };
