import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const IntoSection = () => (
  <section className="hero is-primary has-text-centered intro-container">
    <div className="text-box">
      <div>
        <h1>Hello! I am Rui</h1>
        <h3>I am a full-stack developer and designer.</h3>
        <h3>I design and code beautifully simple things</h3>
      </div>

      <Link to="/contact">
        <button className="intro-button">Say Hello</button>
      </Link>
    </div>
  </section>
)

export default IntoSection
