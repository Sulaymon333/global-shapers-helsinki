import React from 'react'
import Header from './header'
import Hero from './hero'
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
      </div>

      <Footer />
    </div>
  )
}

export default Layout
