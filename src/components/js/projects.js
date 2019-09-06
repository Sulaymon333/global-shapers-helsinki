import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import projectLocation from '../../assets/icons/Location.svg'

import projectsStyles from '../styles/projects.module.scss'

const Projects = ({ projectPage }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            slug
            coverImage {
              file {
                url
              }
            }
            title
            projectShortDescription
            location
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulProjects

  return (
    <section className={projectsStyles.projectsSection} id="projects">
      <div className={projectsStyles.container}>
        <h1
          className={`${projectsStyles.sectionTitle} ${projectPage &&
            projectsStyles.container}`}
        >
          GSH Projects
        </h1>
        <div className={projectsStyles.projectCards}>
          {edges.map(edge => {
            return (
              <Link to={`project/${edge.node.slug}`} key={edge.node.id}>
                <div className={projectsStyles.projectCard}>
                  <div className={projectsStyles.projectCoverImage}>
                    <img
                      src={edge.node.coverImage.file.url}
                      alt="project image"
                    />
                  </div>
                  <p className={projectsStyles.projectTitle}>
                    {edge.node.title}
                  </p>
                  <p className={projectsStyles.projectDescription}>
                    {edge.node.projectShortDescription}
                  </p>
                  <div className={projectsStyles.projectLocation}>
                    <img src={projectLocation} alt="location icon" />
                    <span className={projectsStyles.location}>
                      {edge.node.location}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
