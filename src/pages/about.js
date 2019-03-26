import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import SEO from '../components/seo';
import Layout, { media } from '../components/layout';

class About extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="About" />
                
            </Layout>
        )
    }
}

export default About;