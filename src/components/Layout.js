import React from 'react'
import Header from './Header'
import '../styles/index.scss'
import layoutstyles from './layout.module.scss'
import Hero from './Hero'
import Footer from './footer'

const Layout = () => {
  return (
    <div className={layoutstyles.container}>
      <div className={layoutstyles.content}>
        <Header />
        <Hero />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
