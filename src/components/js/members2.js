import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import membersStyles2 from '../styles/members2.module.scss'

const Members2 = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMembers {
        edges {
          node {
            id
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
  const { edges } = data.allContentfulMembers
  return (
    <div className={membersStyles2.membersSection}>
      <h1 className={membersStyles2.sectionTitle}>{title}</h1>
      <div className={membersStyles2.memberCards}>
        {edges.map(edge => {
          return (
            <div className={membersStyles2.memberCard} key={edge.node.id}>
              <a
                className={membersStyles2.memberCardLink}
                href={edge.node.linkedInUrl}
                target="blank"
              >
                <div className={membersStyles2.memberDetails}>
                  <p className={membersStyles2.fullName}>
                    {edge.node.firstname} {edge.node.lastname}
                  </p>
                  <small className={membersStyles2.position}>
                    {edge.node.title}
                  </small>
                </div>
                <img
                  className={membersStyles2.memberImg}
                  src={edge.node.profilePicture.file.url}
                />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Members2
