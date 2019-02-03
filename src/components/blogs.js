import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.5);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    text-decoration: none;
    color: #000;
  }
`

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
            <div>
              <div className="outerCircle" />
              <div className="innerCircle" />
            </div>
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
              Blogs
            </h1>
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
