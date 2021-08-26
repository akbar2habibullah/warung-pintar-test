import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faCommentAlt } from "@fortawesome/free-solid-svg-icons"

export default function CardPost({ data }) {
  return (
    <div className="post">
      <div className="post-container">
        <img src={data.thumbnail.url} alt={data.title} loading="lazy" />
        <div className="post-info">
          <div className="post-title">{data.title.toUpperCase()}</div>
          <div className="post-interaction">
            <span className="post-likes">
              {data.total_likes} <FontAwesomeIcon icon={faHeart} />
            </span>
            <span className="post-comments">
              {data.total_comments} <FontAwesomeIcon icon={faCommentAlt} />
            </span>
          </div>
        </div>
      </div>
      <p>{data.body.text}</p>
    </div>
  )
}
