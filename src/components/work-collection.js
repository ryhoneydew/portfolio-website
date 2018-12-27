import React from 'react'
import Projects from './projects'
const WorkCollection = () => {
  return (
    <section class="section is-medium is-white has-text-centered">
      <div class="container">
        <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
          My Work
        </h1>
        <div class="project-grid">
          <div class="columns is-multiline is-mobile">
            <Projects />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkCollection
