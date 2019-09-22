import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { graphql } from 'gatsby'


const BlogPage = ({data}) => (
    <Layout>
        <SEO title="Home" />
        <h1 style={{marginLeft: '400px'}}>

           latest Posts

            <br/>
            <br/>
            <hr/>


            {data.allMarkdownRemark.edges.map(post =>(
                <div key={post.node.id}>

                    <h3>
                        {post.node.frontmatter.title}</h3>
                        <small>
                            Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}
                        </small>
                        <br/>
                        <br/>

                        <Link to={post.node.frontmatter.path}>Read More </Link>
                        <br/>
                        <br/>
                        <hr/>




                </div>
            ))}
        </h1>


        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>

    </Layout>
);


export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          date
          author
          title
        }
        excerpt
      }
    }
  }
}
`


export default BlogPage