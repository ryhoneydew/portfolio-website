import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Navigation from './navigation'

const Header = ({ siteTitle }) => (
  <header class="site-header">
    <div class="header-container">
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
