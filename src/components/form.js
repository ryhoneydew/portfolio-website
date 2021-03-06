import React from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
const ContactForm = () => (
  <form action="https://formspree.io/lucia.yang88@gmail.com" method="POST">
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
      <input
        type="submit"
        value="Send Message"
        className="intro-button"
        id="form_button"
      />
    </div>
  </form>
)

export default ContactForm
