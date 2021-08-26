import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import CardPost from "./cardPost"

export default function ListPosts() {
  const postsData = useStaticQuery(graphql`
    query {
      odigo {
        posts {
          data {
            title
            total_comments
            total_likes
            body {
              text
            }
            thumbnail {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <div className="post-list">
      {postsData.odigo.posts.map(({ data }) => (
        <CardPost data={data} />
      ))}
    </div>
  )
}
