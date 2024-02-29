import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about" style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}>
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" style={{ backgroundColor: props.mode === 'neon dark mode' ? 'black' : '', backgroundColor: props.mode === 'dark' ? '#C0C0C0' : '' }}>
                  <li>
                    <Link className="dropdown-item" to="#" style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" style={{ backgroundColor: props.mode === 'neon dark mode' ? 'white' : '' }}/>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" style={{ color: props.mode === 'neon dark mode' ? '#00ffff' : '' }}>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="btn-group mx-3" role="group" aria-label="Basic radio toggle button group" style={{height: "25px", padding: "0px", display: "inline-flex", alignItems: "center"}}>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={props.lightMode}>Light Mode</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio3" onClick={props.darkMode}>Dark Mode</label>

              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
              <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={props.neonDarkMode}>Neon Dark Mode</label>
            </div>
            
            {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode=== 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode=== 'light'?'Dark':'Light'} Mode</label>
            </div> */}
            {/* <form className="d-flex" role="search">
              <input
                name="searchbar"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

// Defining datatypes of props or proptypes
Navbar.propTypes = {
  title: PropTypes.string,
};
// Defining default props for props
Navbar.defaultProps = {
  title: 'Set title here',
};
