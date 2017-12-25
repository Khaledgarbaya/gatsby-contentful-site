import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (filter: {
      node_locale: {eq: "en-US"}
    }) {
        edges {
          node {
            title
            slug
          }
        }
    }
   }
`
