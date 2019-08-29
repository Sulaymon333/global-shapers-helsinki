const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve('./src/templates/projectPage.js')

  const response = await graphql(`
    {
      allContentfulProjects {
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
            description
            location
          }
        }
      }
    }
  `)
  if (response.errors) {
    throw response.errors
  }

  const { edges } = response.data.allContentfulProjects
  console.log(edges)

  edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: projectTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
