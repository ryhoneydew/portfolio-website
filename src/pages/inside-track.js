import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import gif1 from '../images/gif1.gif'
import gif2 from '../images/gif2.gif'

const InsideTrack = () => {
  return (
    <Layout>
      <div className="container is-12-mobile is-half-tablet is-one-third-desktop has-text-centered">
        <h1 class="title is-spaced">Inside Track</h1>
        <p>
          Inside Track is a step-counter app that lets you challenge your
          friends to races where the winner is determined by the greatest
          improvement over your average steps. You can run in multiple races at
          once that can last for minutes, hours, days, or a week -- all you have
          to do is log in, select your avatar, add your friends, and then you
          can hit the track.
        </p>
        <section className="is-medium has-text-centered tech-container">
          <div>
            <h3>Tech Stack:</h3>
          </div>

          <div class="container tech-items">
            <span className="tag ">Javascript</span>
            <span className="tag">React-native</span>
            <span className="tag">Redux</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Sequelize</span>
            <span className="tag">D3.js</span>
            <span className="tag">Expo</span>
            <span className="tag">Native Base</span>
          </div>
          <div>
            <a href="https://github.com/UffishTart">
              <button className="intro-button">View Code on Github</button>
            </a>
            <a href="https://goo.gl/11KwJn">
              <button className="intro-button">View Presentation</button>
            </a>
          </div>
        </section>
        <div className="columns is-multispanne is-mobile">
          <div className="column is-size-1-desktop is-size-4-mobile">
            <img
              src={gif1}
              alf="inside track1"
              style={{ maxWidth: '400px', height: 'auto' }}
            />
          </div>

          <div className="column is-size-2-desktop is-size-4-mobile">
            <img
              src={gif2}
              alf="inside track2"
              style={{ maxWidth: '400px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InsideTrack
