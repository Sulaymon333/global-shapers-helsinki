import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import projectAboutStyles from '../styles/projectAbout.module.scss'

const ProjectAbout = ({ projectDetail }) => {
  return (
    <div className={projectAboutStyles.aboutProject}>
      <h1 className={projectAboutStyles.title}>About the project</h1>
      <div className={projectAboutStyles.projectDetail}>
        {documentToReactComponents(projectDetail.json)}
      </div>
    </div>
  )
}

export default ProjectAbout
