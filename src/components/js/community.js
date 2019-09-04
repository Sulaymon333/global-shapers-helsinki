import React from 'react'

import ImageGallery from './imageGallery'

import communityStyles from '../styles/community.module.scss'

import Video from './video'

const Community = () => {
  return (
    <section className={communityStyles.communitySection}>
      <ImageGallery />
    </section>
  )
}

export default Community
