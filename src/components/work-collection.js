import React from 'react'
import Projects from './projects'
const WorkCollection = () => {
  return (
    <section
      id="my-work"
      className="section is-medium is-white has-text-centered"
    >
      <div className="container ">
        <div className="section-title">
          <h1 className="title link link--kukuri">My Work</h1>
        </div>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            <Projects />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkCollection
