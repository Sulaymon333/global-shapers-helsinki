import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/js/layout'
import Head from '../components/js/head'

import ProjectHero from '../components/js/projectHero'
import ProjectDetail from '../components/js/projectDetail'
import Members from '../components/js/members'
import Newsletter from '../components/js/newsletter'
import Projects from '../components/js/projects'

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
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
        id
        file {
          url
        }
      }
    }
  }
`

const ProjectPage = props => {
  const {
    title,
    coverImage,
    projectDetail,
    projectImages,
  } = props.data.contentfulProjects

  // const { projectImages } = props.data.contentfulProjects
  // projectImages.map()
  // projectImages.map(image => console.log(image.id))
  return (
    <Layout>
      <Head title={title} />
      <ProjectHero title={title} coverImage={coverImage} />
      <ProjectDetail
        projectDetail={projectDetail}
        projectImages={projectImages}
      />
      {/*<Members title="Project Members" />*/}
      <Members title="Project Members" projectPage={true} />
      <Newsletter />
      <Projects projectPage={true} />
    </Layout>
  )
}

export default ProjectPage
