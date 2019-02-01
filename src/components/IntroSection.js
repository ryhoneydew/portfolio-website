import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import './style.scss'
import { FaEnvelope } from 'react-icons/fa'

// const INTO_IMAGE_QUERY = graphql`
//   query {
//     file(relativePath: { regex: "/groupWork/" }) {
//       childImageSharp {
//         fluid(maxWidth: 2500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const IntoSection = () => (
  <section className="hero is-primary has-text-centered intro-container">
    <div className="text-box">
      <div>
        <h1>Hello! I am Rui</h1>
        <h3>I am a full-stack developer and designer.</h3>
        <h3>I design and code beautifully simple things</h3>
      </div>

      <Link to="/contact">
        <button className="intro-button">Say Hello</button>
      </Link>
    </div>
  </section>
)

export default IntoSection

// <div className="follow">
//   <div className="icon first">
//     <FaEnvelope size="20px" color="black" />
//   </div>
//   <div className="icon">
//     <FaEnvelope size="20px" color="black" />
//   </div>
//   <div className="icon">
//     <FaEnvelope size="20px" color="black" />
//   </div>
//   <div className="icon last">
//     <FaEnvelope size="20px" color="black" />
//   </div>
//   <div className="label">Follow</div>
// </div>
