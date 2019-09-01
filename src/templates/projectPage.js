import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/js/layout'
import Head from '../components/js/head'

import HeroProject from '../components/js/heroProject'
import ProjectGallery from '../components/js/projectGallery'
import Members from '../components/js/members'
import Members2 from '../components/js/members2'
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
      projectDetail {
        json
      }
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
    projectDetail,
    projectImages,
  } = props.data.contentfulProjects
  return (
    <Layout>
      <Head title={title} />
      {/* <Hero /> */}
      <HeroProject title={title} coverImage={coverImage} />
      <ProjectGallery id={id} projectImages={projectImages} />
      {/*<Members title="Project Members" />*/}
      <Members2 title="Project Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default ProjectPage
