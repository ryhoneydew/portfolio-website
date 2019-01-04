import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav
    className="navbar is-primary site-header has-text-centered"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link>
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
    <div className=" navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item" href="/#about">
          About
        </a>

        <a className="navbar-item" href="/#my-work">
          My Work
        </a>

        <a className="navbar-item" href="/#blogs">
          Blog
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

// <header className="site-header">
//   <div className="header-container">
//     <h1 style={{ margin: 0, padding: '1rem' }}>
//       <Link
//         to="/"
//         style={{
//           color: '#400101',
//           textDecoration: 'none',
//         }}
//       >
//         {siteTitle}
//       </Link>
//     </h1>
//     <Navigation />
//   </div>
// </header>
