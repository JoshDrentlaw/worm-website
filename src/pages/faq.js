import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react'

import SEO from '../components/seo';
import Layout from '../components/layout';

const FaqBody = styled.div`
    list-style: none;
    padding-left: 0;
`

const Answer = styled(BlockContent)``

const Faq = () => {
    const data = useStaticQuery(graphql`
        {
            allSanityFaq {
                edges {
                    node {
                        _rawQaGroup
                    }
                }
            }
        }      
    `)

    /* useEffect(() => {
        const accordions = document.getElementById('faq').children[0].children;
        for (let el of accordions) {
            el.addEventListener('click', () => {
                const panel = el.childNodes[3];
                if (panel.style.display === '' || panel.style.display === 'none') {
                    panel.style.display = 'block';
                }
                else {
                    panel.style.display = 'none';
                }
            })
        }
    }) */

    const faqList = data.allSanityFaq.edges[0].node._rawQaGroup.map(({ ...data }) => (
        <li key={data._key}>
            <dl>
                <dt>{data.question}</dt>
                <Answer blocks={data.answer} />
            </dl>
        </li>
    ))

    return (
        <Layout>
            <SEO title="FAQ" />
            <FaqBody id="faq">
                {faqList}
            </FaqBody>
        </Layout>
    )
}

export default Faq