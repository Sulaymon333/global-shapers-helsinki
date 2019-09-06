import React from 'react'
import { graphql, Link } from 'gatsby'

import Head from '../components/js/head'
import Header from '../components/js/header'

import notFoundStyles from '../components/styles/404.module.scss'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <>
        <Header />
        <Head title="404 Page" />
        <div className={notFoundStyles.container}>
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
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
