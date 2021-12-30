import React, { useEffect } from "react";
import LoginContent from "../components/LoginContent/LoginContent";
import { useHistory } from "react-router-dom";
import JWT from "jsonwebtoken";
import { getUserAuth } from "../helpers/index";

function Login() {
   const history = useHistory();

   useEffect(() => {
      let userAuth = JWT.decode(getUserAuth());
      if (userAuth?.userId) return history.goBack();
   }, []);

   return (
      <div id="login">
         <LoginContent />
      </div>
   );
}

export default Login;
