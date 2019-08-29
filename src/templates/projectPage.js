import React from 'react'

import Layout from '../components/layout'

import Hero from '../components/hero'
import Members from '../components/members'
import Newsletter from '../components/newsletter'
import Projects from '../components/projects'

const ProjectPage = () => {
  return (
    <Layout>
      {/* <Hero /> */}
      <Members title="Project Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default ProjectPage
