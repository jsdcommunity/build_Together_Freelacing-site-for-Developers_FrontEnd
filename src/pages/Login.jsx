import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LoginContent from "../components/LoginContent/LoginContent";
import { useHistory } from "react-router-dom";
import JWT from "jsonwebtoken";
import { getUserAuth } from "../helpers/index";

function Login() {
   const history = useHistory();

   useEffect(() => {
      let userAuth = JWT.decode(getUserAuth());
      if (userAuth?.active) return history.goBack();
   }, []);

   return (
      <>
         <Header />
         <LoginContent />
         <Footer />
      </>
   );
}

export default Login;
