import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
import Blogs from '../components/blogs'
import IntoSection from '../components/IntroSection'
import About from '../components/about'
import Skills from '../components/skills'
import WorkCollection from '../components/work-collection'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <IntoSection />
    <About />
    <Skills />
    <WorkCollection />
    <Blogs />
  </Layout>
)

export default IndexPage
// <Layout location={location}>
//     <Blogs />
//   </Layout>
