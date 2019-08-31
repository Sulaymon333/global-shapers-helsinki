import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/js/layout'

import Hero from '../components/js/hero'
import Community from '../components/js/community'
import Members from '../components/js/members'
import Newsletter from '../components/js/newsletter'
import Projects from '../components/js/projects'

import '../components/styles/index.scss'

const Index = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Hero />
      <Community />
      <Members title="GSH Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default Index
export const query = graphql`
  query {
    allContentfulMembers {
      edges {
        node {
          title
        }
      }
    }
  }
`
