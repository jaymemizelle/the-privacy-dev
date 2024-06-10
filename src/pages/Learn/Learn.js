import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./Learn.css";
import SecondPane from "../Home/Sections/SecondPane/SecondPane";
import ThirdPane from "../Home/Sections/ThirdPane/ThirdPane";

function Learn() {
  return (
    <div className="learn">
      <MyNavbar
        linkOneText="Home"
        linkOnePath="/"
        linkTwoText="About"
        linkTwoPath="/about"
        linkThreeText="Learn"
        linkThreePath="/learn"
      />
      <h2>Learn How to Protect Your Online Identity</h2>
      <SecondPane />
      <ThirdPane />
    </div>
  );
}

export default Learn;
