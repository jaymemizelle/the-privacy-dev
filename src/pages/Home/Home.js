import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./Home.css";
import TorSection from "./Sections/TorSection/TorSection";

function Home() {
  return (
    <>
      <div className="Home">
        <MyNavbar />
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
