import React from 'react'

import ProjectAbout from './projectAbout'
import ProjectGallery from './projectGallery'

import projectDetailStyles from '../styles/projectDetail.module.scss'

const projectDetail = ({ id, projectDetail, projectImages }) => {
  return (
    <section className={projectDetailStyles.projectDetailSection}>
      <div className={projectDetailStyles.container}>
        <ProjectAbout projectDetail={projectDetail} />
        <ProjectGallery id={id} projectImages={projectImages} />
      </div>
    </section>
  )
}

export default projectDetail
