import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import Hero from '../components/hero'
import Community from '../components/community'
import Members from '../components/members'
import Newsletter from '../components/newsletter'
import Projects from '../components/projects'

import '../styles/index.scss'

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
