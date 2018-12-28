import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Blogs from '../components/blogs'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Blogs />
  </Layout>
)

export default IndexPage
