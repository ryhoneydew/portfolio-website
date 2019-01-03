import React from 'react'
import Layout from '../components/layout'

const Dreamr = () => {
  return (
    <Layout>
      <div className="container is-12-mobile is-half-tablet is-one-third-desktop project-layout has-text-centered">
        <h1>Dreamr</h1>
        <p>
          Dreamr connects you with others by sharing anything you want through
          live streaming. The application is built with openTok API, which
          allows users to publish real-time, high-quality interactive videos. By
          implementing socket.io, users can also interact with subscribers by
          sending real-time messages. The implementation is also comprised of
          Node.js, Express, React/Redux, PostgreSQL and styled-components.
        </p>
        <section className="is-medium has-text-centered tech-container">
          <div>
            <h3>Tech Stack:</h3>
          </div>

          <div class="container tech-items">
            <span className="tag ">Javascript</span>
            <span className="tag">React</span>
            <span className="tag">Redux</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express.js</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Sequelize</span>
            <span className="tag">Styled Component</span>
            <span className="tag">OpenTok API</span>
            <span className="tag">Socket.io</span>
          </div>
          <div>
            <a href="https://github.com/ryhoneydew/Dreamr-A-live-streaming-app">
              <button>View Code on Github</button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Dreamr
