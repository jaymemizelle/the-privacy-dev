import React from "react";
import './TorSection.css';
import TorImage from '../../../../images/tor-project.jfif';

function TorSection() {
  return (
    <section className="torSection">
      <a
        className="torTitle"
        rel="noreferrer"
        href="https://www.torproject.org/"
        target="_blank"
      >
        <h2>The Tor Project: Anonymity Online</h2>
      </a>
      <div className="torDiv">
        <img src={TorImage} alt="Tor Project" />
        <div>
          <p>
            The Tor Project is a 501(c)(3) US nonprofit organization dedicated
            to developing software that allows it's users to browse privately
            and freely online. The Tor Network is made of thousands of
            volunteer-run servers known as Tor relays. These servers allow for
            your internet traffic to be encrypted three times as it passes over
            the Tor network. This allows for you, the user, to browse the web
            completely anonymously. Tor strives to make all it's users look the
            same, which will make it challenging for anyone to track you based on
            your browser or device information.
          </p>
          <p>
            Interested in turning your node into a Tor relay server? Click{" "}
            <a
              className="torServerLink"
              rel="noreferrer"
              href="https://community.torproject.org/relay/setup/"
              target="_blank"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TorSection;
