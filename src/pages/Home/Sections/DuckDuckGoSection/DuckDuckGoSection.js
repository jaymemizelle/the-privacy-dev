import React from 'react';
import './DuckDuckGoSection.css';
import DuckSearch from '../../../../images/duck-search.jfif';

function DuckDuckGoSection() {
    return (
        
    <section className="duckSection">
      <a
        className="duckTitle"
        rel="noreferrer"
        href="https://duckduckgo.com/"
        target="_blank"
      >
        <h2>Duck Duck Go Search Engine</h2>
      </a>
      <div className="duckDiv">
        <img src={DuckSearch} alt="Duck Duck Go Search Engine" />
        <div>
          <p className="duckDescription">
           Duck Duck Go is a private search engine that never tracks your searches. Trackers are hidden on millions of websites to track your browsing history so that they can target you for ads. The danger of this is that if you can be tracked and targeted for ads, you can be tracked and targeted for other, more nefarious, reasons as well. Not only does Duck Duck Go never track your searches, but <a className="duckAppLink" rel="noreferror" target="_blank" href="https://duckduckgo.com/app">Duck Duck Go's browser extension and mobile app</a> blocks many companies' trackers across the Internet, which allows your browsing history to be kept private and safe. What is the worst thing you've ever typed into a search bar? Would you want that to be kept on database which can be hacked or to have that information sold to make money for ads? All based on an internet search you <em>thought</em> was private. The internet is an incredible technology that was created to foster curiosity and intellectual freedom? Duck Duck Go allows users to return to internet's foundation of anonymity. What you type into your search bar should be your business, and no one elses. 
          </p>
        </div>
      </div>
    </section>
    )
}

export default DuckDuckGoSection;