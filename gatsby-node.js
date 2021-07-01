const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) =>
    actions.createPage({
      path: "/posts/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  );
};
