import React, { Component } from "react"
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'



class IndexPage extends Component {
    render(){
        const allPosts = this.proprs.data.allWordpressPost.edges 
        return(
        <div>
            {allPosts.map(({ node }) => (
        <div key={node.slug}>
            <h3>{node.title}</h3>
            </div>
        )
             )}
            </div>
        )
    }
}

export default IndexPage



export const pageQuery = graphql`
query IndexPageQuery {
 
  allWordpressPost {
    edges {
      node {
        id
        slug
        title
        content
        excerpt
        date
        modified
      }
    }
  }
}

`
