import React, { Component } from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const IMAGE_QUERY = graphql`
  query {
    insideTrackImg: file(relativePath: { eq: "inside-track.jpg" }) {
      ...squareImage
    }
    dreamr: file(relativePath: { eq: "Dreamr.jpg" }) {
      ...squareImage
    }
    bookCovers: file(relativePath: { eq: "book-cover.jpg" }) {
      ...squareImage
    }
  }
`
const Projects = () => (
  <StaticQuery
    query={IMAGE_QUERY}
    render={data => (
      <>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop project-container">
          <div className="frame">
            <Img fluid={data.insideTrackImg.childImageSharp.fluid} />
            <a href="/inside-track">
              <div className="details">
                <p>A mobil game built with react-native</p>
              </div>
            </a>
          </div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="frame">
            <Img fluid={data.dreamr.childImageSharp.fluid} />
            <a href="/dreamr">
              <div className="details">
                <p>
                  Dreamer is a <span>live streaming</span> application
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="frame">
            <Img fluid={data.bookCovers.childImageSharp.fluid} />
            <a href="/design-work">
              <div className="details">
                <p>Graphic Design</p>
              </div>
            </a>
          </div>
        </div>
      </>
    )}
  />
)

export default Projects
