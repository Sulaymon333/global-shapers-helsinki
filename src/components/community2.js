import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos2 } from './photos2'
import Video from './Video'

import './community2.scss'

const Community2 = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div className="community-section">
      <h1>GSH Community</h1>
      <Gallery photos={photos2} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos2.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <Video
        videoSrcURL="https://www.youtube.com/embed/5dGPhrkGou0"
        videoTitle="Global Shapers Helsinki"
      />
    </div>
  )
}
export default Community2
