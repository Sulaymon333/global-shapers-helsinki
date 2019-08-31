import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/js/layout'

import HeroProject from '../components/js/heroProject'
import ProjectGallery from '../components/js/projectGallery'
import Members from '../components/js/members'
import Newsletter from '../components/js/newsletter'
import Projects from '../components/js/projects'

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      id
      title
      coverImage {
        file {
          url
        }
      }
      description
      projectImages {
        file {
          url
        }
      }
    }
  }
`

const ProjectPage = props => {
  const {
    id,
    title,
    coverImage,
    description,
    projectImages,
  } = props.data.contentfulProjects
  return (
    <Layout>
      {/* <Hero /> */}
      <HeroProject title={title} coverImage={coverImage} />
      <ProjectGallery id={id} projectImages={projectImages} />
      <Members title="Project Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default ProjectPage
