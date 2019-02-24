module.exports = {
  siteMetadata: {
    title: "Max Eliseev",
    description: "Max Eliseev site",
    author: "@ralkve"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-svg",
    "gatsby-mdx",
    "gatsby-plugin-csp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Max Eliseev site",
        short_name: "Max Eliseev",
        background_color: "#282323",
        theme_color: "#282323"
      }
    }
  ]
}
