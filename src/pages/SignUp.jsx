import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SignUpSteps from "../components/SignUpSteps/SignUpSteps";

function SignUp(props) {
   return (
      <div className="sign-up">
         <Header />
         <SignUpSteps />
         <Footer />
      </div>
   );
}

export default SignUp;
