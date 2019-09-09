import React from 'react'

import Layout from '../components/js/layout'
import Head from '../components/js/head'

import Hero from '../components/js/hero'
import Community from '../components/js/community'
import Members from '../components/js/members'
import Newsletter from '../components/js/newsletter'
import Projects from '../components/js/projects'

import '../components/styles/index.scss'

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Hero />
      <Community />
      {/*<Members title="GSH Members" />*/}
      <Members title="GSH Members" />
      <Newsletter />
      <Projects />
    </Layout>
  )
}

export default Index
