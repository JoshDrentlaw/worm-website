import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import SEO from '../components/seo';
import Layout from '../components/layout';

const Faq = styled.div`
    ${tw`mt-5 lg:w-full text-xl`}

    /* Whole list */
    ul {
        ${tw`list-reset cursor-pointer select-none`}
    }

    & > ul > li {
        ${tw`p-3`}

        /* Question */
        & > p {
            ${tw`font-bold text-black`}

            ::before {
                content: "+ "
            }
        }

        & > ul {
            ${tw`hidden overflow-hidden p-5`}

            /* Answer */
            & > li {
                ${tw`py-2`}

                & > p {
                    ${tw`font-bold mb-2`}
                }

                /* Inner bullet */
                & > ul > li {
                    ${tw`py-2 pl-2`}
                }
            }
        }
    }
`

export default () => {
    const data = useStaticQuery(graphql`
        {
            allSanityFaq(sort: {fields: _createdAt, order: ASC}) {
                edges {
                    node {
                        id
                        question
                        _rawAnswer
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

    const faqs = data.edges.map(({ node }) => (
        <li key={node.id}>
            <dl>
                <dt>{node.question}</dt>
                <dd>{node._rawAnswer}</dd>
            </dl>
        </li>
    ))

    return (
        <Layout>
            <SEO title="FAQ" />
            <Faq id="faq">
                {faqs}
            </Faq>
        </Layout>
    )
}