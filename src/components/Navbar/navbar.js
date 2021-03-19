import React, { Component } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.ico";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navbarDesign">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid navbarDesign2">
            <div className="navbar-brand" href="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: "60px", height: "55px" }}
              />
              Perfect Professor
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navUl ">
                <li className="nav-item">
                  <div
                    className="nav-link active nav-linknav"
                    aria-current="page">
                    About Us
                  </div>
                </li>
                <li className="nav-item active">
                  <div className="nav-link active nav-linknav">Enquiry</div>
                </li>
                <li className="nav-item active">
                  <div className="nav-link active nav-linknav">Subjects</div>
                </li>
                <li className="nav-item active">
                  <div
                    className="nav-link active nav-linknav"
                    tabIndex="-1"
                    aria-disabled="true">
                    Services
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
