import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import membersStyles from '../styles/members.module.scss'

const Members = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMembers {
        edges {
          node {
            firstname
            lastname
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
      <h1>{title}</h1>
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
