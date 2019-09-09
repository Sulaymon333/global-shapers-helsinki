import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import defaultProfileImage from '../../assets/portraits/placeholder-image.png'

import membersStyles from '../styles/members.module.scss'

const Members = ({ title, projectPage }) => {
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

  // sort by profile picture first

  // filter by picture
  const profileWithPicture = edges.filter(profile => {
    return profile.node.profilePicture
  })

  // filter without picture
  const profileWithoutPicture = edges.filter(profile => {
    return !profile.node.profilePicture
  })

  const sortedEdges = profileWithPicture.concat(profileWithoutPicture)

  return (
    <section className={membersStyles.membersSection}>
      <h1
        className={`${membersStyles.sectionTitle} ${projectPage &&
          membersStyles.container}`}
      >
        {title}
      </h1>
      <div className={membersStyles.memberCards}>
        {sortedEdges.map(edge => {
          return (
            <div
              className={membersStyles.memberCard}
              key={edge.node.id}
              title={edge.node.socialMediaUrl === null ? 'No social Media' : ''}
            >
              <a
                className={membersStyles.memberCardLink}
                href={edge.node.socialMediaUrl}
                target="blank"
              >
                <div className={membersStyles.memberDetails}>
                  <p className={membersStyles.fullName}>
                    {edge.node.firstname} {edge.node.lastname}
                  </p>
                </div>
                <img
                  className={membersStyles.memberImg}
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
export default Members
