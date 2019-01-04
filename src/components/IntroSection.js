import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './style.scss'

const INTO_IMAGE_QUERY = graphql`
  query {
    file(relativePath: { regex: "/groupWork/" }) {
      childImageSharp {
        fluid(maxWidth: 2500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Button = styled.button`
  border: 2px solid #400101;
  color: #400101;
  font-size: 1em;
  margin: 0.4rem;
  padding: 0.25em 1em;
  border-radius: 3px;
  z-index: 1;
`
const IntoSection = ({ image }) => (
  <StaticQuery
    query={INTO_IMAGE_QUERY}
    render={data => (
      <section className="hero has-text-centered">
        <Img fluid={data.file.childImageSharp.fluid} />
        <div className="into-container">
          <h1>Hello! I am Rui</h1>
          <h3>I am a full-stack developer and designer.</h3>
          <h3>I design and code beautifully simple things</h3>
          <Link to="/contact">
            <Button>Say Hello</Button>
          </Link>
        </div>
      </section>
    )}
  />
)

export default IntoSection
