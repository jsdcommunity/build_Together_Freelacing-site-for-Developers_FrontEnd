import React from "react";
import "./LogoCard.css";

function LogoCard(props) {
  return (
    <header>
      <img width="64" src="logo.png" alt="UpBit Logo" />
      <h1 href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        UpBit | <span className="text-black">Get it done</span>
      </h1>
    </header>
  );
}

export default LogoCard;
