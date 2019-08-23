import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import videoThumbnail from '../assets/video-image.png'

import communityStyles from './community.module.scss'

const Community = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
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
    <>
      <div className={communityStyles.gshCommunity}>
        <div
          className={`${communityStyles.flexItem} ${communityStyles.instagramPictures}`}
        >
          {edges.slice(0, 10).map(edge => {
            const randomClassArray = ['horizontal', 'vertical', 'big', '']
            const randomIndex = Math.floor(Math.random() * 3)
            const randomClassName = randomClassArray[randomIndex]
            // console.log(randomClassName)
            // const name = { randomClassName }
            // console.log(name)
            return (
              <div
                key={edge.node.id}
                className={communityStyles[randomClassName]}
              >
                <img
                  src={edge.node.thumbnails[`${randomIndex}`].src}
                  alt="Instagram picture"
                />
              </div>
            )
          })}
        </div>
        {/* <div
          className={`${communityStyles.flexItem} ${communityStyles.videoThumbnail}`}
        ></div> */}
      </div>

      {/* <div className={communityStyles.wrapper}>
        <h1>Image Grid</h1>
        <div className={communityStyles.instagramPictures}>
          <div className={communityStyles.horizontal}>
            <img src="https://picsum.photos/500/200" alt="" />
          </div>
          <div className={communityStyles.vertical}>
            <img src="https://picsum.photos/200/350" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/200" alt="" />
          </div>
          <div className={communityStyles.big}>
            <img src="https://picsum.photos/600/600" alt="" />
          </div>
          <div className={communityStyles.vertical}>
            <img src="https://picsum.photos/250/400" alt="" />
          </div>
          <div className={communityStyles.horizontal}>
            <img src="https://picsum.photos/400/150" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/200/220" alt="" />
          </div>
          <div className={communityStyles.horizontal}>
            <img src="https://picsum.photos/450/200" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/220/250" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/250/200" alt="" />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Community
