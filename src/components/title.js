import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  position: relative;
  line-height: 27px;
  font-size: ${({ isSmall }) => (isSmall ? "15px" : "22px")};
  font-weight: 700;
  padding: 50px 0 20px 0;
  color: #606060;
  :after {
    content: "";
    position: absolute;
    display: block;
    bottom: 11px;
    left: 0;
    width: 50px;
    height: 4px;
    background: #0757a0;
    line-height: 1;
    z-index: 1;
  }
`

export const Title = arg => <Wrapper {...arg}></Wrapper>
