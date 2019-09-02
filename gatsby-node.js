const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve('./src/templates/projectPage.js')

  const response = await graphql(`
    query {
      allContentfulProjects {
        totalCount
        edges {
          node {
            id
            slug
            coverImage {
              file {
                url
              }
            }
            title
            projectDetail {
              json
            }
            projectImages {
              file {
                url
              }
            }
            publishedDate
          }
        }
      }
    }
  `)
  if (response.errors) {
    throw response.errors
  }

  const { edges } = response.data.allContentfulProjects

  edges.forEach(edge => {
    createPage({
      path: `project/${edge.node.slug}`,
      component: projectTemplate,
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        title: edge.node.title,
        coverImage: edge.node.coverImage,
        projectDetail: edge.node.projectDetail,
        projectImages: edge.node.projectImages,
        publishedDate: edge.node.publishedDate,
      },
    })
  })
}
