import React, { Component } from 'react';
import '../styles/nav.scss';

class Nav extends Component {
  state = {
    mobileMenu: false
  };

  handleMenuToggle = () => {
    this.setState({ mobileMenu: !this.state.mobileMenu });
  };

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Rubicon
            </a>
            <a role="button" className={`navbar-burger burger ${this.state.mobileMenu ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.handleMenuToggle}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.mobileMenu ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Events
              </a>
              <a className="navbar-item">
                Insight
              </a>
              <a className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
