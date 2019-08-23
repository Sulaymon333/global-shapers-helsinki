import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import communityStyles3 from './community3.module.scss'

const Community3 = () => {
  const data = useStaticQuery(graphql`
    {
      allInstaNode {
        totalCount
        edges {
          node {
            id
            thumbnails {
              src
              config_width
              config_height
            }
          }
        }
      }
    }
  `)
  const { edges } = data.allInstaNode

  return (
    <div
      className={communityStyles3.communityMasonry}
      id={communityStyles3.communityMasonry}
    >
      {edges.slice(0, 5).map(edge => {
        return (
          <div key={edge.node.id} className={communityStyles3.imageWrapper}>
            <img src={edge.node.original} alt="Instagram picture" />
          </div>
        )
      })}
    </div>
  )
}

export default Community3
