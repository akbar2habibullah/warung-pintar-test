import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/Utils/seo"
import BenefitList from "../components/Benefits/listBenefits"
import TitleSection from "../components/UI/titleSection"
import ListTrips from "../components/Trips/listTrips"
import ListPosts from "../components/Posts/listPosts"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className="headline text-second-color">
        <h1 className="font-second">Discover Amazing places in Japan</h1>
        <p>
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this if i had the energy but under the bed, for attack the child, open
          the door.
        </p>
      </div>
      <BenefitList />
      <TitleSection title="Get inspired for your next trip" />
      <ListTrips />
      <TitleSection title="Today post top places to visit" />
      <ListPosts />
    </Layout>
  )
}

export default IndexPage
