import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Navigation from './navigation'

const HeaderWrapper = styled.div`
  background: #b5979a;
`

const HeaderContainer = styled.div`
  margin: '0 auto';
  max-width: 960;
  padding: '1rem';
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1.5rem;
  align-items: center;
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0, padding: '1rem' }}>
        <Link
          to="/"
          style={{
            color: '#400101',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navigation />
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
