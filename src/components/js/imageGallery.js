import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import videoThumbnail from '../../assets/video-thumbnail.png'

import imageGalleryStyles from '../styles/imageGallery.module.scss'

const ImageGallery = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
        totalCount
        edges {
          node {
            id
            original
          }
        }
      }
    }
  `)
  const { edges } = data.allInstaNode

  return (
    <div className={imageGalleryStyles.communityWrapper}>
      <div className={imageGalleryStyles.instagramImagesGallery}>
        {edges.slice(0, 5).map(edge => {
          return (
            <img
              key={edge.node.id}
              className={imageGalleryStyles.instagramImage}
              src={edge.node.original}
              alt="Instagram picture"
            />
          )
        })}
      </div>

      <div className={imageGalleryStyles.videoThumbnail}>
        <img src={videoThumbnail} alt="GSH Instagram image" />
      </div>
    </div>
  )
}

export default ImageGallery
