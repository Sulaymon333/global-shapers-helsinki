import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/js/head'
import Header from '../components/js/header'

import notFoundStyles from '../components/styles/404.module.scss'

const Success = () => {
  return (
    <>
      <Header />
      <Head title="404 Page" />
      <div className={notFoundStyles.container}>
        <h1 className={notFoundStyles.pageTitle}>Thank you for your time.</h1>
        <p className={notFoundStyles.pageDescription}>
          We will keep in touch with you soon.
        </p>
        <Link className={notFoundStyles.homeButton} to="/">
          Back Home
        </Link>
      </div>
    </>
  )
}

export default Success
