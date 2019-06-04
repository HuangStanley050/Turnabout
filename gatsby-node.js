/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allContentfulCase {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allContentfulCase.edges.forEach(({ node }) => {
    //console.log(node.slug);
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`src/templates/case-template.js`),
      context: {
        slug: node.slug,
      },
    });
  });
};
