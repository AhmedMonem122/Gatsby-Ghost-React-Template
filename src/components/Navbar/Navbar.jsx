function Navbar() {
  return (
    <nav className="site-nav">
      <div className="site-nav-left">
        <a aria-current="page" className="site-nav-item" href="/">
          Home
        </a>
        <a className="site-nav-item" href="/">
          Tag
        </a>
        <a className="site-nav-item" href="/">
          Author
        </a>
        <a
          className="site-nav-item"
          href="https://ghost.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </a>
      </div>
      <div className="site-nav-right">
        <a className="site-nav-button" href="/">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
