import React from 'react'
import Layout from '../components/layout'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'

const Contact = () => {
  return (
    <Layout>
      <div className="container contact-container has-text-centered is-12-mobile is-half-tablet is-one-third-desktop">
        <h1>&bull; Keep in Touch &bull;</h1>
        <div className="underline" />
        <form
          action="https://formspree.io/lucia.yang88@gmail.com"
          method="POST"
        >
          <div className="name">
            <lable for="name" />
            <input type="name" name="name" placeholder="Your name" />
          </div>
          <div className="email">
            <lable for="email" />
            <input type="email" name="email" placeholder="Your email" />
          </div>
          <div class="subject">
            <label for="subject" />
            <select
              placeholder="Subject line"
              name="subject"
              id="subject_input"
              required
            >
              <option disabled hidden selected>
                Subject line
              </option>
              <option>I'd like to start a project</option>
              <option>I'd like to ask a question</option>
              <option>I'd like to hire you</option>
              <span>
                <FaRegArrowAltCircleDown />
              </span>
            </select>
          </div>
          <div class="message">
            <label for="message" />
            <textarea
              name="message"
              placeholder="Hi Rui, I'd like to chat about"
              cols="30"
              rows="5"
              required
            />
          </div>
          <div class="submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
// <div className="content has-text-centered">
//           <article className="media-container">
//             <span className="icon">
//               <a href="https://github.com/ryhoneydew">
//                 <FaGithub size="30px" color="black" />
//               </a>
//             </span>
//             <span className="icon">
//               <a href="https://www.linkedin.com/in/rui-yang-6a2a4930/">
//                 <FaLinkedin size="30px" color="black" />
//               </a>
//             </span>
//             <span className="icon">
//               <a href="https://medium.com/@lucia.yang88">
//                 <FaMedium size="30px" color="black" />
//               </a>
//             </span>
//           </article>
//         </div>
