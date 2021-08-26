import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <>
    <header>
      <StaticImage
        src="../../images/hero-images.png"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Odigo Logo"
      />
      <div className="header">
        <StaticImage
          src="../../images/odigo-logo-images.png"
          width={100}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Odigo Logo"
        />
      </div>
    </header>
  </>
)

export default Header
