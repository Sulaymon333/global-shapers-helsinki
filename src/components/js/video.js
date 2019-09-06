import React, { useState } from 'react'

import videoStyles from '../styles/video.module.scss'

const Video = props => {
  const initialState = {
    title: 'video Image',
    width: '100%',
    height: '100%',
    frameBorder: 0,
    play: 0,
    allowFullScreen: true,
  }
  const [videoSettings, setVideoSettings] = useState(initialState)

  const src = `https://www.youtube.com/embed/5dGPhrkGou0?rel=0&autoplay=${videoSettings.play}`

  const playVideo = () => {
    setTimeout(() => {
      setVideoSettings({
        ...videoSettings,
        play: 1,
      })
    }, 1000)
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

export default Video
