import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import membersStyles from './members.module.scss'

const Members = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMembers {
        edges {
          node {
            firstname
            lastname
            title
            linkedInUrl
            profilePicture {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className={membersStyles.membersSection}>
      <h1>GSH Members</h1>
      <div className={membersStyles.flexcontainer}>
        {data.allContentfulMembers.edges.map((edge, index) => {
          return (
            <div
              className={membersStyles.eachMembercontainer}
              key={'edge' + index}
            >
              <a href={edge.node.linkedInUrl} target="blank">
                <div className={membersStyles.textContainer}>
                  <p className={membersStyles.name}>
                    {edge.node.firstname} {edge.node.lastname}
                  </p>
                  <p>
                    <small>{edge.node.title}</small>
                  </p>
                </div>
              </a>

              <img
                className={membersStyles.memberImg}
                src={edge.node.profilePicture.file.url}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Members
