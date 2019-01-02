import React from 'react'
import { spannk } from 'gatsby'
import Layout from '../components/layout'
import gif1 from '../images/gif1.gif'
import gif2 from '../images/gif2.gif'

const InsideTrack = () => {
  return (
    <Layout>
      <div className="container is-12-mobile is-half-tablet is-one-third-desktop project-layout has-text-centered">
        <h1>Inside Track</h1>
        <p>
          Inside Track is a step-counter app that lets you challenge your
          friends to races where the winner is determined by the greatest
          improvement over your average steps. You can run in multiple races at
          once that can last for minutes, hours, days, or a week -- all you have
          to do is log in, select your avatar, add your friends, and then you
          can hit the track.
        </p>
        <div class="tech-container">
          <span className="button is-outspanned ">Javascript</span>
          <span className="button is-outspanned ">React-native</span>
          <span className="button is-outspanned ">Redux</span>
          <span className="button is-outspanned ">Node.js</span>
          <span className="button is-outspanned ">Express.js</span>
          <span className="button is-outspanned ">PostgreSQL</span>
          <span className="button is-outspanned ">Sequespanze</span>
          <span className="button is-outspanned ">D3.js</span>
          <span className="button is-outspanned ">Expo</span>
          <span className="button is-outspanned ">Native Base</span>
        </div>
        <div className="columns is-multispanne is-mobile">
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
