import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
//import Header from './header'
import './layout.css'

const ArchiveList = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
          excerpt
        }
      }
    }
  }
`
const Archive = ({ children }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map(edge => (
            <ArchiveList key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </ArchiveList>
          ))}
        </aside>
      </>
    )}
  />
)

// Archive.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Archive
