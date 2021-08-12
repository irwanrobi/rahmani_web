import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/brand/logo.png";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      class="navbar navbar-expand-sm navbar-dark"
      aria-label="Navbar"
    >
      <div class="container">
        <NavLink to="/home" className="navbar-brand">
          <img src={Logo} alt="" />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <NavLink to="/home" className="nav-item-link" activeClassName="navbar-link-active">
                  <span className="nav-link">Home</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/terjemahan" className="nav-item-link" activeClassName="navbar-link-active">
                  <span className="nav-link">Terjemahan</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/legalisasi" className="nav-item-link" activeClassName="navbar-link-active">
                  <span className="nav-link">Legalisasi</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/blog" className="nav-item-link" activeClassName="navbar-link-active">
                  <span className="nav-link">Blog</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/contact" className="nav-item-link" activeClassName="navbar-link-active">
                  <span className="nav-link">Kontak</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
