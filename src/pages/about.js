import React, { useEffect } from 'react';
import { graphql } from "gatsby";

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

export default ({ data }) => {
    data = data.allMarkdownRemark.nodes[1].html;

    useEffect(() => {
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
    })

    return (
        <Layout>
            <SEO title="About" />
            <Faq id="faq" dangerouslySetInnerHTML={{__html: data}} />
        </Layout>
    )
}

export const query = graphql`
{
    allMarkdownRemark {
        nodes {
            html
        }
    }
}
`