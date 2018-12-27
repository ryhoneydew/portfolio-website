import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`

// const li = styled.li`
//   list-style: none;
// `

class Navigation extends Component {
  render() {
    return (
      <nav>
        <a href="#about">About</a>

        <a href="#my-work">My Work</a>

        <a href="#blog">Blog</a>

        <a href="#contact">Contact</a>
      </nav>
    )
  }
}

export default Navigation
