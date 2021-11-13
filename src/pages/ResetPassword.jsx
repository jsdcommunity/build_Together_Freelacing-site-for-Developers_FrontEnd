import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ResetPasswordContent from "../components/ResetPasswordContent/ResetPasswordContent";

function ResetPassword(props) {
   return (
      <div classsName="confirm-account">
         <Header />
         <ResetPasswordContent />
         <Footer />
      </div>
   );
}

export default ResetPassword;
