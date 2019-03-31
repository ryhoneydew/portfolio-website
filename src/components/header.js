import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import Logo from './logo'
import Modal from './modal'
import ContactForm from './form'

class Header extends Component {
  state = {
    isActive: false,
    modalState: false,
  }
  toggleNav = () => {
    this.setState(prevState => ({
      ...prevState,
      isActive: !prevState.isActive,
    }))
  }
  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      modalState: !prevState.modalState,
    }))
  }
  render() {
    return (
      <Fragment>
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
              <a className="navbar-item" onClick={this.toggleModal}>
                Contact
              </a>
            </div>
          </div>
        </nav>
        <Modal closeModal={this.toggleModal} modalState={this.state.modalState}>
          <ContactForm />
        </Modal>
      </Fragment>
    )
  }
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}
