import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Logo from './logo'

class Header extends Component {
  state = {
    isActive: false,
  }
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    return (
      <nav
        className="navbar menu-padding"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <Logo />
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.toggleNav}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={
            this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
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
  }
}

export default Header

// const Header = ({ siteTitle }) => (
//   <StaticQuery
//     query={SITE_LOGO_QUERY}
//     render={data => {
//       return (
//         <>
// <nav
//   className="navbar menu-padding"
//   role="navigation"
//   aria-label="main navigation"
// >
//   <div className="navbar-brand">
//     <Link to="/">
//       <Img
//         fluid={data.siteLogo.childImageSharp.fluid}
//         style={{ width: '300px', height: 'auto' }}
//       />
//     </Link>

//     <a
//       role="button"
//       className="navbar-burger burger"
//       aria-label="menu"
//       aria-expanded="false"
//       data-target="navbarBasicExample"
//     >
//       <span aria-hidden="true" />
//       <span aria-hidden="true" />
//       <span aria-hidden="true" />
//     </a>
//   </div>

//   <div id="navbarBasicExample" className="navbar-menu">
//     <div className="navbar-end ">
//       <a className="navbar-item" href="/#about">
//         About
//       </a>
//       <a className="navbar-item" href="/#my-work">
//         My Work
//       </a>
//       <a className="navbar-item" href="/#blogs">
//         Blogs
//       </a>
//       <Link to="/contact" className="navbar-item">
//         Contact
//       </Link>
//     </div>
//   </div>
// </nav>
//         </>
//       )
//     }}
//   />
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}
