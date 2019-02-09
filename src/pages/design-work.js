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
            <div className=" page-container container is-12-mobile is-half-tablet is-one-third-desktop project-layout has-text-centered">
              <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                design work
              </h1>
              <p>
                6-years experience on CAD design of women's accessories and
                graphic design. Recent project was designing a collection of
                book covers for a lesbian romance publisher. More design works
                upon request
              </p>
              <section className="section is-medium has-text-centered ">
                <div>
                  <h3>Tools:</h3>
                </div>
                <div className="container tech-items">
                  <span className="tag ">Adobe Photoshop</span>
                  <span className="tag">Adobe Illustrator</span>
                  <span className="tag">Stock photos</span>
                  <span className="tag">Sketch</span>
                </div>
                <div className="columns is-multiline is-mobile">
                  {names.map(name => (
                    <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
                      <Img fluid={data[name].childImageSharp.fluid} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Layout>
        </>
      )
    }}
  />
)

export default DesignWork
