import React from 'react'
import Header from './Header'

import Hero from './hero'
import Members from './members'
import Community from './community'
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
      </div>

      <Footer />
    </div>
  )
}

export default Layout
