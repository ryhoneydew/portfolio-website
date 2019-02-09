import React from 'react'
import Layout from '../components/layout'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'

const Contact = () => {
  return (
    <Layout>
      <div className="container contact-container has-text-centered is-12-mobile is-half-tablet is-one-third-desktop ">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline" />
        <form
          action="https://formspree.io/lucia.yang88@gmail.com"
          method="POST"
        >
          <div className="name">
            <label html="name">
              <input type="name" name="name" placeholder="Your name" />
            </label>
          </div>
          <div className="email">
            <label html="email">
              <input type="email" name="email" placeholder="Your email" />
            </label>
          </div>
          <div className="subject">
            <label html="subject">
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                <option disabled hidden defaultValue>
                  Subject line
                </option>
                <option>I'd like to start a project</option>
                <option>I'd like to ask a question</option>
                <option>I'd like to hire you</option>
                <span>
                  <FaRegArrowAltCircleDown />
                </span>
              </select>
            </label>
          </div>
          <div className="message">
            <label html="message">
              <textarea
                name="message"
                placeholder="Hi Rui, I'd like to chat about"
                cols="30"
                rows="5"
                required
              />
            </label>
          </div>
          <div className="submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
