import React from 'react'
import Header from './Header'

import Hero from './hero'
import Members from './members'
import Community from './community'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'
import Newsletter from './newsletter'

const Layout = () => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <Hero />
        <Community />
        <Members />
        <Newsletter />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
