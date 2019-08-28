import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import projectsStyles from './projects.module.scss'

import projectImage from '../assets/project-images/project-1/project-1.jpg'
import projectLocation from '../assets/icons/Location.svg'

const Projects = () => {
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
    <section className={projectsStyles.projectsSection}>
      <div className={projectsStyles.container}>
        <h1 className={projectsStyles.title}>GSH Projects</h1>
        <div className={projectsStyles.projectBox}>
          <img src={projectImage} alt="project image" />
          <p className={projectsStyles.projectTitle}>Red Cross Project</p>
          <p className={projectsStyles.projectDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fugiat dolor cum totam veritatis laborum.
          </p>
          <div className={projectsStyles.projectLocation}>
            <img src={projectLocation} alt="location icon" />
            <span className={projectsStyles.location}>
              Global Shapers Helsinki
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
