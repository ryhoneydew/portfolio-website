import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const LISTING_QUERY = graphql`
  query listingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            url
          }
          excerpt
        }
      }
    }
  }
`
const Blogs = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => (
      <section id="blogs" className="section is-medium has-text-centered ">
        <div className="container">
          <div className="section-title">
            <h1 className="title">blogs</h1>
          </div>
          <div className="columns is-multiline is-mobile blog-section">
            {allMarkdownRemark.edges.map(edge => (
              <article
                key={edge.node.frontmatter.slug}
                className="column is-12-mobile is-full-tablet is-full-desktop blog-container"
              >
                <div className="card blog-content">
                  <h2 className="blog-title">{edge.node.frontmatter.title}</h2>
                  <p className="subtitle">{edge.node.frontmatter.date}</p>
                  <p>{edge.node.excerpt}</p>
                  <a className="read-more" href={edge.node.frontmatter.url}>
                    <h2>View on Medium</h2>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )}
  />
)

export default Blogs
