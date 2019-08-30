import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPost = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProjects {
        totalCount
        edges {
          node {
            id
            coverImage {
              file {
                url
              }
            }
            title
            description
            projectImages {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div>
        <div class="parent">
          <div class="div1"> </div>
          <div class="div2"> </div>
          <div class="div3"> </div>
          <div class="div4"> </div>
          <div class="div5"> </div>
          <div class="div6"> </div>
          <div class="div7"> </div>
          <div class="div8"> </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
