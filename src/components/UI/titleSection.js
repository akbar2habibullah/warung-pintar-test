import React from "react"

export default function TitleSection({title}) {
  return (
    <div className="title">
      <h2>{title}</h2>
      <div className="line">
        <hr />
      </div>
    </div>
  )
}
