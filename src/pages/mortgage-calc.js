import React from 'react'
import Layout from '../components/layout'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Mortgage_Calc_QUERY = graphql`
  query {
    form: file(relativePath: { eq: "mortgage-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 934) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    report: file(relativePath: { eq: "mortgage-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 934) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const MortgageCalculator = () => (
  <StaticQuery
    query={Mortgage_Calc_QUERY}
    render={data => {
      const names = Object.keys(data)
      return (
        <>
          <Layout>
            <div className="page-container container is-12-mobile is-half-tablet is-one-third-desktop project-layout has-text-centeredpage-container container is-12-mobile is-half-tablet is-one-third-desktop has-text-centered ">
              <h1 className="title is-spaced">Mortgage Calculator</h1>
              <p>
                A online tool to calculate the monthly mortgage payment and a
                report with donut chart will be generated with the breakdown.
              </p>
              <section className="is-medium has-text-centered tech-container">
                <div>
                  <h3>Tech Stack:</h3>
                </div>
                <div class="container tech-items">
                  <span className="tag ">Javascript</span>
                  <span className="tag">React Hooks</span>
                  <span className="tag">D3.js</span>
                  <span className="tag">SASS</span>
                </div>
                <div>
                  <a href="https://codesandbox.io/s/mortgage-calculator-with-react-hooks-and-sass-9ukn5">
                    <button className="intro-button">
                      View on CodeSandbox
                    </button>
                  </a>
                </div>
              </section>
              <div className="columns is-multiline is-mobile">
                {names.map(name => (
                  <div className="column is-size-2-desktop is-12-mobile">
                    <Img fluid={data[name].childImageSharp.fluid} />
                  </div>
                ))}
              </div>
            </div>
          </Layout>
        </>
      )
    }}
  />
)
export default MortgageCalculator
