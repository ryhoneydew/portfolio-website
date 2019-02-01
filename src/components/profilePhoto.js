import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Profile = () => (
  <StaticQuery
    query={graphql`
      query {
        profile: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img fluid={data.profile.childImageSharp.fluid} className="profile-img" />
    )}
  />
)
export default Profile
