import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ConfirmAccountContent from "../components/ConfirmAccountContent/ConfirmAccountContent";

function ConfirmAccount(props) {
   return (
      <div id="confirm-account">
         <Header />
         <ConfirmAccountContent />
         <Footer />
      </div>
   );
}

export default ConfirmAccount;
