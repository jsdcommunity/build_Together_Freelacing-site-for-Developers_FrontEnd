import React from "react";
import Footer from "../components/Footer/Footer";
import LogoCard from "../components/LogoCard/LogoCard";

function Home(props) {
  return (
    <div className="home">
      <LogoCard />
      <Footer />
    </div>
  );
}

export default Home;
