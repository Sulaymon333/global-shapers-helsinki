import React from 'react'

import projectHeroStyles from '../styles/projectHero.module.scss'

const HeroProject = ({ title, coverImage }) => {
  return (
    <>
      <div
        className={projectHeroStyles.projectCoverImage}
        style={{
          backgroundImage: `url(${coverImage.file.url}?w=800&h=300&fit=fill`,
        }}
      ></div>
      <div className={projectHeroStyles.container}>
        <div className={projectHeroStyles.projectNameCta}>
          <h1 className={projectHeroStyles.projectTitle}>{title}</h1>
          <a
            className={projectHeroStyles.joinProjectBtn}
            target="_blank"
            href="https://weforum.eu.qualtrics.com/jfe/form/SV_6F4bAg3fL2x1eXb"
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
