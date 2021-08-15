import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./Home.css";
import TorSection from "./Sections/TorSection/TorSection";

function Home() {
  return (
    <>
      <div className="Home">
        <MyNavbar linkOneText="Operating Systems" linkOnePath="os" linkTwoText="Web Browsers" linkTwoPath="/browsers" linkThreeText="Search Engines" linkThreePath="/search-engines" linkFourText="Secure Messaging" linkFourPath="secure-messaging"/>
        <h1 className="title">
          Privacy is not a Privelage.
          <br />
          It is a civil human right.
        </h1>
      </div>
      <TorSection />
    </>
  );
}

export default Home;
