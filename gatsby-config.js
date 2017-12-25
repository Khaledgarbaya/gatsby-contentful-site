module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3bc97k4uk5q7',
        accessToken: '7b0772bf12f724a39c945f91135a8d657391042b50aae6e5ec28b0b9bb42f530'
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
