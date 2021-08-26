import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import CardTrip from "./cardTrip"

export default function ListTrips() {
  const tripData = useStaticQuery(graphql`
    query {
      odigo {
        trips {
          data {
            title
            thumbnail {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div className="trip-list">
      <CardTrip
        type="trip-wide"
        image={tripData.odigo.trips[0].data.thumbnail.url}
        title={tripData.odigo.trips[0].data.title}
      />
      <CardTrip
        type="trip-wide"
        image={tripData.odigo.trips[1].data.thumbnail.url}
        title={tripData.odigo.trips[1].data.title}
      />
      <CardTrip
        type="trip"
        image={tripData.odigo.trips[2].data.thumbnail.url}
        title={tripData.odigo.trips[2].data.title}
      />
      <CardTrip
        type="trip"
        image={tripData.odigo.trips[3].data.thumbnail.url}
        title={tripData.odigo.trips[3].data.title}
      />
      <CardTrip
        type="trip"
        image={tripData.odigo.trips[4].data.thumbnail.url}
        title={tripData.odigo.trips[4].data.title}
      />
    </div>
  )
}
