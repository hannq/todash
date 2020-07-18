/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// @ts-check

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
const fse = require('fs-extra');
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
exports.onCreatePage = ({ page, node, getNode, actions, pathPrefix }) => {
  switch (page.path) {
    case '/index/':
      // @ts-ignore
      actions.deletePage(page);
      // @ts-ignore
      actions.createPage({
        ...page,
        path: '/',
        context: {}, // additional data can be passed via context
      })
      break;
    default:
      break;
  }
}

/** @type { import('gatsby').GatsbyNode['createPages'] } */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const docTemplate = path.resolve(`src/templates/doc-template/index.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: {order: ASC, fields: frontmatter___order}) {
        nodes {
          id
          fileAbsolutePath
          html
          frontmatter {
            name
            groupName
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
    fileAbsolutePath,
    html
  }) => {
    const pathPatternList = fileAbsolutePath.split(path.sep).slice(0, -1);
    const itemName = pathPatternList.pop();
    const itemGroupName = pathPatternList.pop();
    return {
      content: html,
      path: `/${itemGroupName}/${itemName}`,
      groupName: frontmatter.groupName,
      anchorList: headings,
      name: frontmatter.name
    }
  });
  const menuList = Object
    .entries(groupBy(totalPages, 'groupName'))
    .map(([groupName, children]) => ({ groupName, children }));
  totalPages.forEach(({
    content,
    path,
    anchorList,
  }) => {
    createPage({
      path,
      component: docTemplate,
      context: {
        currentPath: path,
        anchorList,
        content,
        menuList,
      },
    })
  });
}
