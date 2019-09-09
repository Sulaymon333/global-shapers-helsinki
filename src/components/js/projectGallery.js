import React from 'react'

import projectGalleryStyles from '../styles/projectGallery.module.scss'

const ProjectGallery = ({ projectImages }) => {
  return (
    <div className={projectGalleryStyles.projectGalleryImages}>
      {projectImages.map((projectImage, index) => {
        return (
          <picture
            key={projectImage.id}
            className={projectGalleryStyles.projectGalleryImage}
          >
            <source
              className={projectGalleryStyles.projectGalleryImage}
              srcSet={`${projectImage.file.url}?w=800&h=300&fm=webp`}
              type="image/webp"
            />
            <img
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
