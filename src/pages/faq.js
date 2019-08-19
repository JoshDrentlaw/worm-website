import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";

import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react'

import SEO from '../components/seo';
import Layout from '../components/layout';

const FaqBody = styled.ul`
    cursor: pointer;
    list-style: none;
    padding-left: 0;
`

const Question = styled.dt`
    font-size: calc(20px + (28 - 20) * (100vw - 300px) / (880 - 300));
    font-weight: 700;
    margin-bottom: 10px;

    &::before {
        content: "+ ";
    }
`

const Answer = styled.dd`
    display: none;
    margin-left: 0;

    ul {
        list-style: none;
        padding-left: 0;
        font-size: calc(20px + (25 - 20) * (100vw - 300px) / (880 - 300));
        margin-bottom: 20px;

        li {
            margin-bottom: 10px;
        }
    }

    ul ul {
        list-style: none;
        padding-left: 0;
        font-size: calc(17px + (20 - 17) * (100vw - 300px) / (880 - 300));
    }
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
                <Question>{data.question}</Question>
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