import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar menu-padding"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link to="/" className="navbar-item" style={{ minWidth: '250px' }}>
        <h1>{siteTitle}</h1>
      </Link>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end ">
        <a className="navbar-item" href="/#about">
          About
        </a>
        <a className="navbar-item" href="/#my-work">
          My Work
        </a>
        <a className="navbar-item" href="/#blogs">
          Blogs
        </a>
        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
