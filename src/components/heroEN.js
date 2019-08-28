import React from "react"
import Downloads from "./downloads"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const HeroEN = () => {
  const data = useStaticQuery(graphql`
    query {
      mockup: file(relativePath: { eq: "mockups/faceEN.png" }) {
        childImageSharp {
          fixed(width: 203, height: 319) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <div style={{
      position: "relative",
      paddingBottom: 215,
    }}>

      <div className="type--note">INTRODUCING</div>
      <h1 className="type--h2" style={{ margin: "0 0 10px 0" }}>Color Collect</h1>
      <p>A color app for everyone.</p>

      <Downloads/>

      <Link to={"/"}
            className={"type--link"}
            style={{
              margin: "42px 0 0 0",
              display: "block",
            }}
      >
        Explore palettes →
      </Link>

      <Img fixed={data.mockup.childImageSharp.fixed}
           style={{
             position: "absolute",
             right: -72,
             top: 125,
           }}
      />
    </div>
  )
}


HeroEN.propType = {}

HeroEN.defaultProp = {}

export default HeroEN

