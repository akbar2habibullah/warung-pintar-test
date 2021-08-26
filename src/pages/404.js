import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/Utils/seo"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
