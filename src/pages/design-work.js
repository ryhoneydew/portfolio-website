import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ART_WORK_QUERY = graphql`
  query {
    colorMeIn: file(relativePath: { eq: "color-me-in.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    convergence: file(relativePath: { eq: "convergence.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    calmBeforeTheStorm: file(
      relativePath: { eq: "calm-before-the-storm.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    loveInJune: file(relativePath: { eq: "love-in-june.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    playMeASong: file(relativePath: { eq: "play-me-a-song.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nowWeAreHere: file(relativePath: { eq: "now-we're-here.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    loveMeInTime: file(relativePath: { eq: "love-me-in-time.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saveMeInTime: file(relativePath: { eq: "save-me-in-time.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    findMeInTime: file(relativePath: { eq: "find-me-in-time.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DesignWork = () => (
  <StaticQuery
    query={ART_WORK_QUERY}
    render={data => {
      const names = Object.keys(data)
      return (
        <>
          <Layout>
            <section className="section is-medium has-text-centered project-layout">
              <div className="container">
                <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                  Design Work
                </h1>
                <div className="columns is-multiline is-mobile">
                  {names.map(name => (
                    <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                      <Img fluid={data[name].childImageSharp.fluid} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Layout>
        </>
      )
    }}
  />
)

export default DesignWork
