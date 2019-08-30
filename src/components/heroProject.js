import React from 'react'

const HeroProject = () => {
  return (
    <div className={heroStyles.header}>
      <div className={heroStyles.heroDiv}>
        <h1 className={heroStyles.pageHeadingPrimary}>
          Global Shapers Helsinki (GSH)
        </h1>
        <h3 className={heroStyles.pageHeadingSecondary}>
          is a network of young people driving
          <br />
          dialogue, action and change.
        </h3>
        <a
          className={heroStyles.joinBtn}
          target="_blank"
          href="https://www.globalshapers.org/hubs/helsinki-hub"
          id="join"
        >
          Join now!
        </a>
      </div>
    </div>
  )
}

export default HeroProject
