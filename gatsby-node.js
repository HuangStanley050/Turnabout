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
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allContentfulCase.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`src/templates/case-template.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  //figure out how many posts we have to start pagination
  const posts = data.posts.edges;
  //posts per page
  const postPerPage = 3;
  //number of page
  const numberPages = Math.ceil(posts.length / postPerPage);
  Array.from({ length: numberPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs/1` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numberPages,
        currentPage: i + 1,
      },
    });
  });
};
