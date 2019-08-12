import React from "react"
import Header from "./Header"
 import '../styles/index.scss'
import layoutstyles from './layout.module.scss'
import Hero from'./Hero'

const Layout = () => {
  return (
    <div className = {layoutstyles.container}>
      <Header />
      <Hero/>

      
    </div>
  )
}

export default Layout
