import React from 'react'
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from 'react-icons/fa'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <article className="meida-container center">
          <span className="icon">
            <a href="mailto:ruiyang0319@gmail.com?subject=Hello Rui!">
              <FaEnvelope size="30px" color="black" />
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/ryhoneydew">
              <FaGithub size="30px" color="black" />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/rui-yang-6a2a4930/">
              <FaLinkedin size="30px" color="black" />
            </a>
          </span>
          <span className="icon">
            <a href="https://medium.com/@lucia.yang88">
              <FaMedium size="30px" color="black" />
            </a>
          </span>
        </article>

        <p>© {new Date().getFullYear()}, Built with Gatsby</p>
      </div>
    </footer>
  )
}

export default Footer
