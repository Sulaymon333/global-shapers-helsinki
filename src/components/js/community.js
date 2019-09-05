import React from 'react'

import ImageGallery from './imageGallery'

import communityStyles from '../styles/community.module.scss'

const Community = () => {
  return (
    <section className={communityStyles.communitySection}>
      <ImageGallery />
    </section>
  )
}

export default Community
