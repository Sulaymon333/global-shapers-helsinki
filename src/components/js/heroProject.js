import React from 'react'

import heroProjectStyles from '../styles/heroProject.module.scss'

const HeroProject = ({ title, coverImage }) => {
  return (
    <>
      <div
        className={heroProjectStyles.projectCoverImage}
        style={{ backgroundImage: `url(${coverImage.file.url})` }}
      ></div>
      <div className={heroProjectStyles.container}>
        <div className={heroProjectStyles.projectNameCta}>
          <h1 className={heroProjectStyles.projectTitle}>{title}</h1>
          <a
            className={heroProjectStyles.joinProjectBtn}
            target="_blank"
            href="https://www.globalshapers.org/hubs/helsinki-hub"
            id="join"
          >
            Join Project
          </a>
        </div>
      </div>
    </>
  )
}

export default HeroProject
