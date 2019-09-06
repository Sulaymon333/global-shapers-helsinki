import React from 'react'

import Layout from '../components/js/layout'
import Head from '../components/js/head'

import Hero from '../components/js/hero'
import Community from '../components/js/community'
import Members from '../components/js/members'
import Members2 from '../components/js/members2'
import Newsletter from '../components/js/newsletter'
import Projects from '../components/js/projects'

import '../components/styles/index.scss'

const Index = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <Community />
      {/*<Members title="GSH Members" />*/}
      <Members2 title="GSH Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default Index
