import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PIXGRID_SCREEN_QUERY = graphql`
  query {
    pixGridScreen: file(relativePath: { eq: "pixgrid-screen.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const PixGrid = () => (
  <StaticQuery
    query={PIXGRID_SCREEN_QUERY}
    render={data => {
      return (
        <>
          <Layout>
            <div className="page-container container is-12-mobile is-half-tablet is-one-third-desktop has-text-centered ">
              <h1 class="title is-spaced">pix grid</h1>
              <p>
                PixGrid is a photo gallery with some of the best shots in 2018.
                The site was built with vanilla Javascript, CSS, HTML,
                Parcel.js, and Jest.
              </p>
              <section className="is-medium has-text-centered tech-container">
                <div>
                  <h3>Tech Stack:</h3>
                </div>

                <div class="container tech-items">
                  <span className="tag ">Javascript</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">Web API</span>
                  <span className="tag">Parcel</span>
                  <span className="tag">Jest</span>
                </div>
                <div>
                  <a href="https://github.com/ryhoneydew/PixGrid">
                    <button className="intro-button">
                      View Code on Github
                    </button>
                  </a>
                </div>
              </section>
              <section className="is-medium has-text-centered tech-container menu-padding">
                <Img
                  fluid={data.pixGridScreen.childImageSharp.fluid}
                  style={{ width: '80%' }}
                />
              </section>
            </div>
          </Layout>
        </>
      )
    }}
  />
)
export default PixGrid
// return (

//   )
// }
