import React from 'react'
import Header from './Header'
import '../styles/index.scss'
import layoutstyles from './layout.module.scss'
import Hero from './Hero'
import Members from './Members'
import Community from './Community'

const Layout = () => {
  return (
    <div className={layoutstyles.container}>
      <Header />
      <Hero />
      <Community />
      <Members />
    </div>
  )
}

export default Layout
