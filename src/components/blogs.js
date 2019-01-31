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
      <section
        id="blogs"
        className="section is-medium is-white has-text-centered"
      >
        <div className="container">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
            Blogs
          </h1>

          <div className="columns is-multiline is-mobile ">
            {allMarkdownRemark.edges.map(edge => (
              <article
                key={edge.node.frontmatter.slug}
                className="column is-12-mobile is-half-tablet is-half-desktop blog-container"
              >
                <div className="card">
                  <h2 className="title">{edge.node.frontmatter.title}</h2>
                  <p className="subtitle">{edge.node.frontmatter.date}</p>
                  <p>{edge.node.excerpt}</p>
                  <Link
                    className="read-more"
                    to={`/posts${edge.node.frontmatter.slug}`}
                  >
                    Read More
                  </Link>
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
// <Post key={edge.node.frontmatter.slug}>
//   <Link to={`posts${edge.node.frontmatter.slug}`}>
//     <h2>{edge.node.frontmatter.title}</h2>
//   </Link>
//   <p>{edge.node.frontmatter.date}</p>
//   <p>{edge.node.excerpt}</p>
//   <Link to={`posts${edge.node.frontmatter.slug}`}> Read More </Link>
// </Post>
