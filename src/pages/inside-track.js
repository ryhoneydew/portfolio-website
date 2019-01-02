import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import gif1 from '../images/gif1.gif'
import gif2 from '../images/gif2.gif'

const InsideTrack = () => {
  return (
    <Layout>
      <div className="container is-12-mobile is-half-tablet is-one-third-desktop project-layout has-text-centered">
        <h1>Inside Track</h1>
        <div className="columns is-multiline is-mobile">
          <div className="column is-size-1-desktop is-size-4-mobile">
            <img src={gif1} alf="inside track1" />
          </div>

          <div className="column is-size-2-desktop is-size-4-mobile">
            <img src={gif2} alf="inside track2" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InsideTrack
