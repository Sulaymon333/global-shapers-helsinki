import React from 'react'

import projectGalleryStyles from '../styles/projectGallery.module.scss'

const ProjectGallery = ({ id, projectImages }) => {
  return (
    <div className={projectGalleryStyles.projectGalleryImages}>
      {projectImages.map(projectImage => {
        return (
          <picture
            key={id}
            className={projectGalleryStyles.projectGalleryImage}
          >
            <source
              key={id}
              className={projectGalleryStyles.projectGalleryImage}
              srcset={`${projectImage.file.url}?w=800&h=300&fm=webp`}
              type="image/webp"
            />
            <img
              key={id}
              className={projectGalleryStyles.projectGalleryImage}
              src={`${projectImage.file.url}?w=800&h=300`}
              role="presentation"
              alt="Project image"
            />
          </picture>
        )
      })}
    </div>
  )
}

export default ProjectGallery
