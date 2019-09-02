import React from 'react'

import projectGalleryStyles from '../styles/projectGallery.module.scss'

const ProjectGallery = ({ id, projectImages }) => {
  return (
    <div className={projectGalleryStyles.projectGalleryImages}>
      {projectImages.map(projectImage => {
        return (
          <img
            key={id}
            className={projectGalleryStyles.projectGalleryImage}
            src={projectImage.file.url}
            alt="Project image"
          />
        )
      })}
    </div>
  )
}

export default ProjectGallery
