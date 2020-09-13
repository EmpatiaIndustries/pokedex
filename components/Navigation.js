import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <img
          className="navbar-brand"
          style={{ width: 150, height: 100 }}
          src={require("../Pokemon_logo.svg")}
          alt="logo pokemon"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">pokémons</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">about</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a className="nav-link">services</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
