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
          }
          excerpt
        }
      }
    }
  }
`
const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <Post key={edge.node.frontmatter.slug}>
          <Link to={`posts${edge.node.frontmatter.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`posts${edge.node.frontmatter.slug}`}> Read More </Link>
        </Post>
      ))
    }
  />
)

export default Listing
