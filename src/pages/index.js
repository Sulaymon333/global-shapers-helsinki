import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Index = ({ data }) => {
  console.log(data)
  return <Layout />
}

export default Index
export const query = graphql`
  query {
    allContentfulMembers {
      edges {
        node {
          title
        }
      }
    }
  }
`
