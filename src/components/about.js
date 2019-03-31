import React from 'react'
import Profile from './profile'

const About = () => {
  return (
    <section id="about" className="section is-medium has-text-centered">
      <div className="container">
        <div className="columns is-centered about-container">
          <Profile className="column profile-container is-12-mobile is-half-tablet is-one-third-desktop" />

          <div className="column is-three-fifths">
            <div className="section-title is-spaced is-12-mobile is-half-tablet is-half-desktop">
              <h1 className="title">about me</h1>
            </div>
            <h2 className="subtitle">
              I am a software engineer and designer based in Brooklyn, NY.
              Previously, I have 6+ years of experience in the fashion design
              industry at the senior level. Since 2017, I started to learn to
              code and I absolutely love it! After graduated from one of the top
              coding boot camps, Fullstack Academy of Code, I began the journey
              working as a software engineer. I am enthusiastic to build things
              that can impact people's life.
            </h2>
            <h2 className="subtitle">
              When I am not coding, you may find me in some local meet-up events
              or workshops because I love to meet new friends and learn from
              others. I love watching new TV shows or going to the theater to
              catch the latest movie with my husband. I am also a foodie and
              love to spend time with my friends and families enjoying delicious
              food.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
