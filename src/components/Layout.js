import React from 'react'
import Header from './Header'
import '../styles/index.scss'
import layoutstyles from './layout.module.scss'
import Hero from './Hero'
import Community from './Community' //some comment
import Community2 from './Community2'

const Layout = () => {
  return (
    <main className={layoutstyles.container}>
      <Header />
      <Hero />
      {/* <Community /> */}
      <Community2 />
    </main>
  )
}

export default Layout
