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

const ListItem = styled.li`
  list-style: none;
`

class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link>My Work</Link>
        </ListItem>
        <ListItem>
          <Link>Blog</Link>
        </ListItem>
        <ListItem>
          <Link>Contact</Link>
        </ListItem>
      </NavContainer>
    )
  }
}

export default Navigation
