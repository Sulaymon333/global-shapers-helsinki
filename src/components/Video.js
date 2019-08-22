import React from 'react'

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <div>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
