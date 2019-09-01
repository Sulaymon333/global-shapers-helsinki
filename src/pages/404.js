import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/js/layout'
import Head from '../components/js/head'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout>
        <Head title="404 Page" />
        <h1>Not Found</h1>
        <p>The requested page was not found</p>
        <p>
          <Link to="/">Go back home</Link>{' '}
        </p>
      </Layout>
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
