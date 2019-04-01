import React from 'react';
import { graphql } from "gatsby";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import SEO from '../components/seo';
import Layout, { media } from '../components/layout';
import { parse } from 'querystring';

export default ({ data }) => {
    data = data.allMarkdownRemark.edges[1].node.html;
    console.log(data)
    return (
        <Layout>
            <SEO title="About" />
            {
                
            }
        </Layout>
    )
}

export const query = graphql`
{
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    title
                }
                html
            }
        }
    }
}
`