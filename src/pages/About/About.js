import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./About.css";

function About() {
  return (
    <div className="about">
      <MyNavbar
        linkOneText="Home"
        linkOnePath="/"
        linkTwoText="About"
        linkTwoPath="/about"
        linkThreeText="Learn"
        linkThreePath="/learn"
      />
      <div className="mainContent">
        <h2 className="aboutTitle">About The Privacy Dev</h2>
        <p>
          This website was created to educate
          people on what they can do to protect their online identity, which is
          ever-increasingly being linked to our real-world identity. I remember
          when the internet first began and anonymity fostered connection,
          learning, curiosity, and freedom of expression. Because we can never
          go back, I am seeking to pave a new way forward that allows both users and
          IT professionals alike to protect their real-world identity from
          online attack. Identity theft, cyberstalking, cancel-culture, and financial ruin are
          some of the consequences of not knowing how to protect our digital
          privacy. The tools listed on the home-page are a great place to start.
          <br/><br/>
          Who am I? I am a software developer who has a great sense of compassion and empathy for the people I build software for. There is no doubt that software has changed already changed the world and the way we live in it. Some debate whether this change is good or bad. I became a developer to build and be a part of the good that software can do. As we move into the age of virtual reality, we need to know how to protect ourselves on this new frontier, and I would like to be a part of informing people how they can do just that. 
        </p>
      </div>
    </div>
  );
}

export default About;
