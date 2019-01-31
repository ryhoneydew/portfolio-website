import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

import './style.scss'

import styled from 'styled-components'
import Helmet from './helmet'

import Footer from './footer'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1.5rem;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/groupWork/" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="main-layout">
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// <Spring
//           from={{ height: location.pathname === '/' ? 400 : 600 }}
//           to={{ height: location.pathname === '/' ? 200 : 100 }}
//         >
//           {styles => (
//             <div style={{ overflow: 'hidden', ...styles }}>
//               <Img fluid={data.file.childImageSharp.fluid} />
//             </div>
//           )}
//         </Spring>

// <MainLayout>
//   <div>{children}</div>
//   <Archive />
// </MainLayout>

// <LandingPageContainer>
// <Img fluid={data.file.childImageSharp.fluid} />
// <LandingPageLayout>
//   <h1>Hello! I am Rui</h1>
//   <h3>I am a full-stack developer and designer.</h3>
//   <h3>I design and code beautifully simple things</h3>
//   <Link to="/campuses">
//     <Button>Say Hello</Button>
//   </Link>
// </LandingPageLayout>
// </LandingPageContainer>
