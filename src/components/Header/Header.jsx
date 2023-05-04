import logo from "../../images/ghost-logo-lime-wh-01.png";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import rss from "../../images/rss.svg";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="site-head">
      <div className="container">
        <div className="site-mast">
          <div style={{ maxWidth: "100px" }}>
            <a href="/">
              <img width="100%" src={logo} alt="Ghost & Gatsby" />
            </a>
          </div>
          <div className="social-media">
            <a href="https://twitter.com">
              <img
                width="100%"
                src={twitter}
                alt="Twitter"
                className="site-logo"
              />
            </a>
            <a href="https://facebook.com">
              <img
                width="100%"
                src={facebook}
                alt="Facebook"
                className="site-logo"
              />
            </a>
            <a href="https://feedly.com">
              <img width="100%" src={rss} alt="RSS" className="site-logo" />
            </a>
          </div>
        </div>

        <div className="site-banner">
          <h1 className="site-banner-title">Ghost &amp; Gatsby</h1>
          <p className="site-banner-desc">Thoughts, stories and JAMstack</p>
        </div>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
