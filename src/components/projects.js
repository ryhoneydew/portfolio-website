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
          <Img fluid={data.insideTrackImg.childImageSharp.fluid} />
          <div className="overlay has-text-centered">
            <h3>A react-native mobile game</h3>
            <a href="/inside-track">More Info</a>
          </div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <figure className="image">
            <Img fluid={data.dreamr.childImageSharp.fluid} />
            <figcaption>
              <h3>A live streaming application</h3>
              <a href="/dreamr">More Info</a>
            </figcaption>
          </figure>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <figure className="image">
            <Img fluid={data.bookCovers.childImageSharp.fluid} />
            <figcaption>
              <h3>Graphic Design</h3>
              <a href="/design-work">More Info</a>
            </figcaption>
          </figure>
        </div>
      </>
    )}
  />
)

export default Projects
