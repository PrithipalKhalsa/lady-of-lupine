/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import moPic from "../../content/assets/thats-mo.jpg"
import "./contact.css"
function ContactBlock() {
      return (
        <section className="contact-block">
        <div className="">
        <form name="contact" method="POST" data-netlify="true">
          <div className="contact-wrapper">
            <label> <input  placeholder="Your Name"  type="text" name="name" /></label>
          </div>
          <div className="contact-wrapper">
            <label> <input placeholder="Your Email"  type="email" name="email" /></label>
          </div>
          <div className="contact-wrapper">
            <label> <textarea rows="5" placeholder="Message"  name="message"></textarea></label>
          </div>
          <div>
            <button type="submit" class="button primary fit">Send</button>
          </div>
        </form>
        </div>
        </section>
)
}

const contactBlockQuery = graphql`
  query contactBlockQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default ContactBlock
