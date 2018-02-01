module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.KHALED_GARBAYA_CF_SPACE || '3bc97k4uk5q7',
        accessToken: process.env.KHALED_GARBAYA_CF_TOKEN || 'cad8217f92693dac2350540d49d51dd459a8c9a9c2729dcc90409a96e197cb48'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
