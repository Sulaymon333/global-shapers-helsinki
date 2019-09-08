import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/js/head'
import Header from '../components/js/header'

import notFoundStyles from '../components/styles/404.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Head title="404 Page" />
      <div className={notFoundStyles.container} style={{ marginTop: '88px' }}>
        <h1 className={notFoundStyles.pageTitle}>Not Found</h1>
        <p className={notFoundStyles.pageDescription}>
          The requested page was not found.
        </p>
        <Link className={notFoundStyles.homeButton} to="/">
          Back Home
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
