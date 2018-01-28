import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <img src={node.featureImage.responsiveResolution.src}/>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul className='blog-post'>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [publishDate], order: DESC }
    ) {
        edges {
          node {
            title
            slug
            content {
              childMarkdownRemark {
                excerpt
              }
            }
            featureImage {
              responsiveResolution(width: 300, height: 300) {
                src
              }
            }
          }
        }
    }
   }
`
