import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import team from '../../assets/icons/team.svg'
import time from '../../assets/icons/time.svg'
import project from '../../assets/icons/project.svg'

import heroStyles from '../styles/hero.module.scss'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMembersTest {
        totalCount
      }
      allContentfulProjects {
        totalCount
      }
    }
  `)

  const { totalCount: totalCountMembers } = data.allContentfulMembersTest
  const { totalCount: totalCountProjects } = data.allContentfulProjects

  return (
    <>
      <div className={heroStyles.heroSection}>
        <div className={heroStyles.brandInfoContainer}>
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
            href="https://weforum.eu.qualtrics.com/jfe/form/SV_6F4bAg3fL2x1eXb"
            id="join"
          >
            Join now!
          </a>
        </div>
      </div>
      <div className={heroStyles.container} id="about">
        <h1 className={heroStyles.bodyH1}>Who we are?</h1>
        <p className={heroStyles.bodyPara}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque hic
          minima omnis dolorem est excepturi cum ipsum eos mollitia
          necessitatibu consectetur adipisicing elit. Eaque hic minima omnis
          dolorem est excepturi cum ipsum eos mollitia necessitatibu
        </p>
        <h1 className={heroStyles.bodyH1}>GSH in numbers</h1>
        <div className={heroStyles.bodyIconsSection}>
          <div className={heroStyles.bodyIconWrapper}>
            <img
              className={heroStyles.bodyIconImg}
              src={team}
              alt="team icon"
            />
            <p className={heroStyles.bodyIconText}>
              {totalCountMembers} Shapers
            </p>
          </div>
          <div className={heroStyles.bodyIconWrapper}>
            <img
              className={heroStyles.bodyIconImg}
              src={time}
              alt="time icon"
            />
            <p className={heroStyles.bodyIconText}>1000hrs Spent</p>
          </div>
          <div className={heroStyles.bodyIconWrapper}>
            <img
              className={heroStyles.bodyIconImg}
              src={project}
              alt="Project icon"
            />
            <p className={heroStyles.bodyIconText}>
              {totalCountProjects} Projects completed
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
