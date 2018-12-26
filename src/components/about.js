import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div``

const About = () => {
  return (
    <section class="section is-medium is-primary has-text-centered is-long">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-three-fifths">
            <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
              About Me
            </h1>
            <h2 class="subtitle is-size-5-desktop">
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
