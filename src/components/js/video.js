import React, { useState } from 'react'
import PropTypes from 'prop-types'

import videoBackground from '../../assets/video-thumbnail.png'

import videoStyles from '../styles/video.module.scss'

const Video = props => {
  const initialState = {
    title: '',
    width: 1280,
    height: 720,
    frameBorder: 0,
    play: 0,
    allowFullScreen: true,
  }
  const [videoSettings, setVideoSettings] = useState(initialState)
  const src = `https://www.youtube.com/embed/PwXyq4oQ75M?autoplay=${videoSettings.play}`
  const playVideo = () => {
    setVideoSettings({
      ...videoSettings,
      play: 1,
    })
  }
  const { title, width, height, frameBorder, allowFullScreen } = videoSettings
  return (
    <div className={videoStyles.videoBackground}>
      <iframe
        className={videoStyles.iframe}
        title={title}
        width={width}
        height={height}
        src={src}
        frameBorder={frameBorder}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={allowFullScreen}
        onMouseEnter={playVideo}
      />
    </div>
  )
}

Video.propTypes = {}

export default Video
