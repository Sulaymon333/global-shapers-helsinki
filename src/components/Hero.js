import React from "react"
import heroStyles from "./hero.module.scss"

const Hero = () => {
  return (
    <div className={heroStyles.header}>
      <h1 className={heroStyles.pageHeadingPrimary}>
        Global Shapers Helsinki (GSH)
      </h1>
      <h3 className={heroStyles.pageHeadingSecondary}>
        is a network of young people driving
        <br /> dialogue, action and change.
      </h3>
    </div>
  )
}

export default Hero
