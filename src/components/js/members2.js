import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import defaultProfileImage from '../../assets/portraits/placeholder-image.png'

import membersStyles2 from '../styles/members2.module.scss'

const Members2 = ({ title, projectPage }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMembersTest {
        edges {
          node {
            id
            firstname
            lastname
            socialMediaUrl
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
  const { edges } = data.allContentfulMembersTest

  console.log(edges)
  return (
    <section className={membersStyles2.membersSection}>
      <h1
        className={`${membersStyles2.sectionTitle} ${projectPage &&
          membersStyles2.container}`}
      >
        {title}
      </h1>
      <div className={membersStyles2.memberCards}>
        {edges.map(edge => {
          return (
            <div
              className={membersStyles2.memberCard}
              key={edge.node.id}
              title={edge.node.socialMediaUrl === null ? 'No social Media' : ''}
            >
              <a
                className={membersStyles2.memberCardLink}
                href={edge.node.socialMediaUrl}
                target="blank"
              >
                <div className={membersStyles2.memberDetails}>
                  <p className={membersStyles2.fullName}>
                    {edge.node.firstname} {edge.node.lastname}
                  </p>
                </div>
                <img
                  className={membersStyles2.memberImg}
                  src={
                    edge.node.profilePicture === null
                      ? `${defaultProfileImage}`
                      : edge.node.profilePicture.file.url
                  }
                />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Members2
