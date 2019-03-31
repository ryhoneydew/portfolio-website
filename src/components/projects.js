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
    pixgrid: file(relativePath: { eq: "pixgrid.jpg" }) {
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
                <h1>Inside Track</h1>
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
                <h1>Dreamer</h1>
                <p>Dreamer is a live streaming application</p>
              </div>
            </a>
          </div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="frame">
            <Img fluid={data.pixgrid.childImageSharp.fluid} />
            <a href="/pix-grid">
              <div className="details">
                <h1>PixGrid</h1>
                <p>A photograpy gallery</p>
              </div>
            </a>
          </div>
        </div>
        <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
          <div className="frame">
            <Img fluid={data.bookCovers.childImageSharp.fluid} />
            <a href="/design-work">
              <div className="details">
                <h1>Graphic Design</h1>
                <p>Collections of illustrations and graphic designs</p>
              </div>
            </a>
          </div>
        </div>
      </>
    )}
  />
)

export default Projects
