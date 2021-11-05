import React, { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SignUpSteps from "../components/SignUpSteps/SignUpSteps";
import JWT from "jsonwebtoken";
import { getUserAuth } from "../helpers";
import { useHistory } from "react-router-dom";

function SignUp(props) {
   const history = useHistory();

   useEffect(() => {
      let userAuth = JWT.decode(getUserAuth());
      if (userAuth?.active) return history.goBack();
   }, []);

   return (
      <div className="sign-up">
         <Header />
         <SignUpSteps />
         <Footer />
      </div>
   );
}

export default SignUp;
