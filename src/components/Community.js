import React from 'react'

import communityStyles from './community.module.scss'
import ImageGallery from './imageGallery'

const Community = () => {
  return (
    <section className={communityStyles.communitySection}>
      <ImageGallery />
    </section>
  )
}

export default Community
