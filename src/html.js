import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `const _userway_config = {
              /* uncomment the following line to override default position*/
              /* position: '3', */
              /* uncomment the following line to override default size (values: small, large)*/
              /* size: 'small', */
              /* uncomment the following line to override default language (e.g., fr, de, es, he, nl, etc.)*/
              /* language: 'en-US', */
              /* uncomment the following line to override color set via widget (e.g., #053f67)*/
              /* color: '#053f67', */
              /* uncomment the following line to override type set via widget(1=person, 2=chair, 3=eye)*/
              /* type: '1', */
              /* uncomment the following line to override support on mobile devices*/
              mobile: true,
              account: 'YKDYseAnwN'
            };`
          }}
        />
        <script type="text/javascript" src="smoothscroll.js"></script>
        <script type="text/javascript" src="https://cdn.userway.org/widget.js"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
