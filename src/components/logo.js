import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const SITE_LOGO_QUERY = graphql`
  query {
    siteLogo: file(relativePath: { eq: "site-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Logo = () => (
  <StaticQuery
    query={SITE_LOGO_QUERY}
    render={data => (
      <Img
        fluid={data.siteLogo.childImageSharp.fluid}
        style={{ width: '300px', height: 'auto' }}
      />
    )}
  />
)
export default Logo
