import Link from "next/link";
import pokeball from "../pokeball.svg";
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
          <img
            style={{ width: 40, height: 40 }}
            src={pokeball}
            alt="pokeball"
          />
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

          <div
            style={{ marginLeft: "800px" }}
            className="md-form active-pink active-pink-2 mb-3 mt-0"
          >
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

const onChange = (e) => {
  console.log(e.target.value);
};

export default Navigation;
