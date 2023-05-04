function Footer() {
  return (
    <footer className="site-foot">
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left">
          <a aria-current="page" className="" href="/">
            Ghost &amp; Gatsby
          </a>
          © 2021 — Published with
          <a
            className="site-foot-nav-item"
            href="https://ghost.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ghost
          </a>
        </div>
        <div className="site-foot-nav-right">
          <a aria-current="page" className="site-foot-nav-item" href="/">
            Home
          </a>
          <a className="site-foot-nav-item" href="/">
            Tag
          </a>
          <a className="site-foot-nav-item" href="/">
            Author
          </a>
          <a
            className="site-foot-nav-item"
            href="https://ghost.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
