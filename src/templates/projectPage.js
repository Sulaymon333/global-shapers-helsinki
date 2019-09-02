import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/js/layout'
import Head from '../components/js/head'

import ProjectHero from '../components/js/projectHero'
import ProjectDetail from '../components/js/projectDetail'
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
      <ProjectHero title={title} coverImage={coverImage} />
      <ProjectDetail
        id={id}
        projectDetail={projectDetail}
        projectImages={projectImages}
      />
      {/*<Members title="Project Members" />*/}
      <Members2 title="Project Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default ProjectPage
