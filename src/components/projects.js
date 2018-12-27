import React, { Component } from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 300, maxHeight: 300) {
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

    #   image2: file(relativePath: { eq: "images/image2.jpg" }) {
    #     ...squareImage
    #   }

    #   image3: file(relativePath: { eq: "images/image3.jpg" }) {
    #     ...squareImage
    #   }
  }
`
const Projects = () => (
  <StaticQuery
    query={IMAGE_QUERY}
    render={data => (
      <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
        <figure class="image">
          <Img fluid={data.insideTrackImg.childImageSharp.fluid} />
          <figcaption />
          <h3>A react-native mobile game</h3>
          <a href="/inside-track">More Info</a>
        </figure>
      </div>
    )}
  />
)
//   <StaticQuery
//     query={IMAGE_QUERY}
//     render={({ data }) => (
//       <>
//         <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
//           <figure class="image is-3by2">
//             <Img {...data.image1.file} />
//           </figure>
//         </div>
//       </>
//     )}
//   />

export default Projects
