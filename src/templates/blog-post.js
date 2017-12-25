import React, { Component} from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
  render() {
    const {
      title
    } = this.props.data.contentfulBlog
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
    }
  }
`
