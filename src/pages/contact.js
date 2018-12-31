import React from 'react'
import Layout from '../components/layout'
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa'

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
            <lable for="name">
              <input type="name" name="name" placeholder="Your name" />
            </lable>
          </div>
          <div className="email">
            <lable for="email">
              <input type="email" name="email" placeholder="Your email" />
            </lable>
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
