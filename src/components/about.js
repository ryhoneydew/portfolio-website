import React from 'react'
import Profile from './profilePhoto'

const About = () => {
  return (
    <section id="about" className="section is-medium has-text-centered is-long">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths is-size-3-desktop is-size-4-mobile profile-container">
            <Profile />
          </div>
          <div className="column is-three-fifths">
            <div className="section-title is-spaced is-size-1-desktop is-size-4-mobile">
              <div>
                <div className="outerCircle" />
                <div className="innerCircle" />
              </div>
              <h1 className="title ">About Me</h1>
            </div>

            <h2 className="subtitle is-size-5-desktop">
              Before becoming a full-stack developer, i worked as fashion
              designer for 6 years. I’ve also done graphic design and logo
              design. After graduated from Fullstack Academy of code, I am
              pursuing the career as a full-stack developer.{' '}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
