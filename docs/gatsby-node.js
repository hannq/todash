/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// @ts-check

const path = require('path');
const { groupBy } = require('lodash');


/** @type { import('gatsby').GatsbyNode['onCreateWebpackConfig'] } */
exports.onCreateWebpackConfig = ({
  getConfig,
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => { }



/** @type { import('gatsby').GatsbyNode['onCreatePage'] } */
exports.onCreatePage = ({ page, graphql, node, getNode, actions, pathPrefix }) => { }

/** @type { import('gatsby').GatsbyNode['createPages'] } */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const docTemplate = path.resolve(`src/templates/doc-template/index.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: {order: ASC, fields: frontmatter___order}) {
        nodes {
          id
          html
          frontmatter {
            name
            groupName
            path
          }
          headings {
            depth
            value
            id
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const totalPages = result.data.allMarkdownRemark.nodes.map(({
    frontmatter,
    headings,
    html
  }) => {
    return {
      content: html,
      path: frontmatter.path,
      groupName: frontmatter.groupName,
      anchorList: headings,
      name: frontmatter.name
    }
  });

  const menuList = Object
    .entries(groupBy(totalPages.filter(({ groupName }) => groupName), 'groupName'))
    .sort(([, [{ order: orderA }]], [, [{ order: orderB }]]) => orderA - orderB)
    .map(([groupName, children]) => ({
      title: groupName,
      selectable: false,
      key: groupName,
      children: children.map(({ path, name }) => ({
        title: name,
        selectable: true,
        key: path,
      }))
    }));

  totalPages.forEach(({
    content,
    path,
    anchorList,
    name,
  }) => {
    createPage({
      path,
      component: docTemplate,
      context: {
        currentPath: path,
        title: name,
        content,
        menuList,
        anchorList,
      },
    })
  });
}
