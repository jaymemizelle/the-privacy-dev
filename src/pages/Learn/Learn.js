import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./Learn.css";

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
    </div>
  );
}

export default Learn;
