import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Note: You can change "images" to whatever you'd like.

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  width: 50
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = getImage(
        data.allFile.edges.find(n => {
          return n.node.relativePath.includes(props.filename)
        }).node
      )
      if (!image) {
        return null
      }

      return <GatsbyImage alt={props.alt} image={image} />
    }}
  />
)

export default Image
