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
import "./bio.css"
function BioBlock() {
      return (
        <section className="bio-block">
        <div className="color-block">
        <div class="bio-pic-wrapper">
          <img src={moPic} class="bio-pic"></img>
          <div className="bio-text">
            Hi im mo and this is where my bio goes. Im afraid of the dark and i love my friends.
            if you want to make you something or just make a mess. Please contact me.
          </div>
              </div>
          </div>
        </section>
      )

}

const bioBlockQuery = graphql`
  query bioBlockQuery {
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

export default BioBlock
