import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeContent from "../components/HomeContent/HomeContent";

function Home() {
   return (
      <div id="home">
         <Header />
         <HomeContent />
         <Footer />
      </div>
   );
}

export default Home;
