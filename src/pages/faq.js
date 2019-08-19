import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";

import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react'

import SEO from '../components/seo';
import Layout from '../components/layout';

const FaqBody = styled.ul`
    list-style: none;
    padding-left: 0;
`

const Answer = styled.dd`
    display: none;
`

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

    useEffect(() => {
        const accordions = document.getElementsByClassName('accordion');
        for (let el of accordions) {
            el.addEventListener('click', () => {
                let panel = el.childNodes[0].childNodes[1];
                if (panel.style.display === '' || panel.style.display === 'none') {
                    panel.style.display = 'block';
                }
                else {
                    panel.style.display = 'none';
                }
            })
        }
    })

    const faqList = data.allSanityFaq.edges[0].node._rawQaGroup.map(({ ...data }) => (
        <li className="accordion" key={data._key}>
            <dl>
                <dt>{data.question}</dt>
                <Answer>
                    <BlockContent blocks={data.answer} />
                </Answer>
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