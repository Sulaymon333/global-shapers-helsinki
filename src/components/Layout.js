import React from 'react'
import Header from './Header'
import '../styles/index.scss'
import layoutstyles from './layout.module.scss'
import Hero from './Hero'
import Footer from './footer'

const Layout = () => {
  return (
    <div className={layoutstyles.container}>
      <Header />
      <Hero />

      <Footer />
    </div>
  )
}

export default Layout
