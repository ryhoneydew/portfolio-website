import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const DREAMR_SCREEN_QUERY = graphql`
  query {
    dreamrScreen: file(relativePath: { eq: "dreamr-screen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 934) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Dreamr = () => (
  <StaticQuery
    query={DREAMR_SCREEN_QUERY}
    render={data => {
      return (
        <>
          <Layout>
            <div className="page-container container is-12-mobile is-half-tablet is-one-third-desktop project-layout has-text-centered ">
              <h1>dreamr</h1>
              <p>
                Dreamr connects you with others by sharing anything you want
                through live streaming. The application is built with openTok
                API, which allows users to publish real-time, high-quality
                interactive videos. By implementing socket.io, users can also
                interact with subscribers by sending real-time messages. The
                implementation is also comprised of Node.js, Express,
                React/Redux, PostgreSQL and styled-components.
              </p>
              <section className="is-medium has-text-centered tech-container">
                <div>
                  <h3>Tech Stack:</h3>
                </div>

                <div className="container tech-items">
                  <span className="tag ">Javascript</span>
                  <span className="tag">React</span>
                  <span className="tag">Redux</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Express.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Sequelize</span>
                  <span className="tag">Styled Component</span>
                  <span className="tag">OpenTok API</span>
                  <span className="tag">Socket.io</span>
                </div>
                <div>
                  <a href="https://github.com/ryhoneydew/Dreamr-A-live-streaming-app">
                    <button className="intro-button">
                      View Code on Github
                    </button>
                  </a>
                </div>
              </section>
              <section className="is-medium has-text-centered tech-container">
                <Img
                  fluid={data.dreamrScreen.childImageSharp.fluid}
                  style={{ width: '60%' }}
                />
              </section>
            </div>
          </Layout>
        </>
      )
    }}
  />
)
export default Dreamr
