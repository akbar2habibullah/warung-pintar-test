import React from "react"

export default function CardTrip({ type, image, title }) {
  return (
    <div className={type}>
      <img src={image} alt={title} loading="lazy" />
      <div className="image-layer"></div>
      <div className="trip-title font-second">{title}</div>
    </div>
  )
}
