import React from 'react'

import Header from './Header'
import Hero from './hero'
import Community from './community'
import Members from './members'
import Newsletter from './newsletter'
import Projects from './projects'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <Hero />
        <Community />
        <Members />
        <Newsletter />
        <Projects />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
