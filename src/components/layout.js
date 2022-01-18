import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./header"
import { Footer } from "./footer"

import PropTypes from "prop-types"

import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  max-width: 1920px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
