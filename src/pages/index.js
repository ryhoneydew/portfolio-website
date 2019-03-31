import React from 'react'
import Layout from '../components/layout'
import Blogs from '../components/blogs'
import IntoSection from '../components/IntroSection'
import About from '../components/about'
import Skills from '../components/skills'
import WorkCollection from '../components/work-collection'

const IndexPage = ({ location }) => (
  <Layout className="main-layout">
    <IntoSection />
    <About />
    <Skills />
    <WorkCollection />
    <Blogs />
  </Layout>
)

export default IndexPage
