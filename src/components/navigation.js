import React, { Component } from 'react'
import { Link } from 'gatsby'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <a href="#about">About</a>

        <a href="#my-work">My Work</a>

        <a href="#blogs">Blog</a>

        <Link to="/contact">Contact</Link>
      </nav>
    )
  }
}

export default Navigation
