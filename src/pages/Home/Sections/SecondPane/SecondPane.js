import React from 'react';
import "./SecondPane.css";

function SecondPane() {
    return (
        <section className="secondPane">
            <div className="container">
                <div onClick={() => window.open('https://www.torproject.org/download/')} className="tool">
                    <i><img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/80/000000/external-browser-cyber-security-kiranshastry-lineal-color-kiranshastry-4.png"/></i>
                    <h3>Tor Browser</h3>
                    <p>Tor Browser is a private browser.</p>
                </div>

                <div onClick={() => window.open('https://duckduckgo.com/')} className="tool">
                    <i><img src="https://img.icons8.com/nolan/80/duckduckgo.png"/></i>
                    <br/>
                    <h3>Duck Duck Go</h3>
                    <p>Duck Duck Go is a search engine.</p>
                </div>

                <div onClick={() => window.open('https://www.signal.org/')} className="tool">
                    <i><img src="https://img.icons8.com/office/80/000000/chat-message.png"/></i>
                    <h3>Signal</h3>
                    <p>Signal is an encrypted messaging app.</p>
                </div>

                <div onClick={() => window.open('https://protonmail.com/?utm_campaign=us-all-2a-mail-gro_src-g_acq-branded&utm_medium=src_ad&utm_source=bing.com&utm_content=1346902202165599&utm_term=protonmail')} className="tool">
                    <i><img src="https://img.icons8.com/office/80/000000/email.png"/></i>
                    <h3>Proton Mail</h3>
                    <p>ProtonMail is an encrypted email service.</p>
                </div>



            </div>
        </section>
    )
}

export default SecondPane
