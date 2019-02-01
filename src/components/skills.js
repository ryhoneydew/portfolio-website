import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SKILL_IMAGE_QUERY = graphql`
  query {
    designer: file(relativePath: { eq: "designer.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    developer: file(relativePath: { eq: "developer1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Skills = () => {
  return (
    <StaticQuery
      query={SKILL_IMAGE_QUERY}
      render={data => (
        <>
          <section className="section has-text-centered ">
            <div className="container">
              <div className="box">
                <div className="columns is-centered">
                  <div className="column">
                    <div className="image-container">
                      <Img
                        style={{ width: '69%' }}
                        fluid={data.developer.childImageSharp.fluid}
                      />
                    </div>
                    <h3>
                      I am passionate about coding. I tend to code things from
                      scratch, and enjoy bringing ideas to life in the browser.
                    </h3>
                    <h3 className="list-title has-text-primary has-text-weight-normal">
                      Languages
                    </h3>
                    <ul>
                      <li>Javasript</li>
                      <li>Html</li>
                      <li>CSS</li>
                    </ul>
                    <h3 className="list-title has-text-primary has-text-weight-normal">
                      Libraries/frameworks
                    </h3>
                    <h3>
                      React, Redux, Sequelize, Node.js, Graphql, Express.js,
                      Gatsby, Socket.io, d3.js
                    </h3>
                  </div>
                  <div className="column right-column">
                    <div className="image-container">
                      <Img
                        style={{ width: '40%' }}
                        fluid={data.designer.childImageSharp.fluid}
                      />
                    </div>
                    <h3>
                      I love web and graphic design. I value simple content
                      structure, clean design patterns, and thoughtful
                      interactions.
                    </h3>
                    <h3 className="list-title has-text-primary has-text-weight-normal">
                      Design Tools
                    </h3>
                    <ul>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe Indesign</li>
                      <li>Pen & Paper</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    />
  )
}

export default Skills
