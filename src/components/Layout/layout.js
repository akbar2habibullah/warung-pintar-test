import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../Header/header"
import "../../styles/Global.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          position: "absolute",
          zIndex: 10,
        }}
      >
        <main
          style={{
            margin: "0 10%",
            width: "80%",
          }}
        >{children}
        </main>
        <footer>
          <StaticImage
            src="../../images/odigo-logo-images.png"
            width={100}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Odigo Logo"
          />
        </footer>
      </div>
    </>
  )
}

export default Layout
