import React from 'react'

import Header from './header'
import Footer from './footer'

import layoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      {/* sticky footer */}
      <div className={layoutStyles.content}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
