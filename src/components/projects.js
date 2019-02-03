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
          <figure className="image">
            <Img fluid={data.insideTrackImg.childImageSharp.fluid} />
            <figcaption>
              <h2>A react-native mobile game</h2>
              <a href="/inside-track" />
            </figcaption>
          </figure>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <figure className="image">
            <Img fluid={data.dreamr.childImageSharp.fluid} />
            <figcaption>
              <h2>
                Dreamer is a <span>live streaming</span> application
              </h2>
              <a href="/dreamr" />
            </figcaption>
          </figure>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <figure className="image">
            <Img fluid={data.bookCovers.childImageSharp.fluid} />
            <figcaption>
              <h2>Graphic Design</h2>
              <a href="/design-work" />
            </figcaption>
          </figure>
        </div>
      </>
    )}
  />
)

export default Projects
