import React from 'react'

const Skills = () => {
  return (
    <section class="section has-text-centered">
      <div class="container">
        <div class="box">
          <div class="columns is-centered">
            <div class="column">
              <h1 class="title is-size-4 is-spaced">Designer</h1>
              <p>
                I love web and graphic design. I value simple content structure,
                clean design patterns, and thoughtful interactions.
              </p>
              <p class="list-title has-text-primary has-text-weight-normal">
                Design Tools
              </p>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Indesign</li>
                <li>Pen & Paper</li>
              </ul>
            </div>
            <div class="column">
              <h1 class="title is-size-4 is-spaced">Developer</h1>
              <p>
                I am passionate about coding. I tend to code things from
                scratch, and enjoy bringing ideas to life in the browser.
              </p>
              <p class="list-title has-text-primary has-text-weight-normal">
                Languages
              </p>
              <ul>
                <li>Javasript</li>
                <li>Html</li>
                <li>CSS</li>
              </ul>
              <p class="list-title has-text-primary has-text-weight-normal">
                Libraries/frameworks
              </p>
              <p>
                React, Redux, Sequelize, Node.js, Express, Gatsby, Socket.io,
                d3.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
