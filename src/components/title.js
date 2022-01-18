import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  line-height: 27px;
  width: 200px;
  justify-content: ${({ isCenter }) => (isCenter ? "center" : "left")};
  align-self: center;
  font-size: ${({ isSmall }) => (isSmall ? "15px" : "22px")};
  font-weight: 700;
  padding: 30px 0;
  color: #606060;
  :after {
    content: "";
    position: absolute;
    display: block;
    bottom: 11px;
    left: ${({ isCenter }) => (isCenter ? "13%" : "0")};
    width: 50px;
    height: 4px;
    background: #0757a0;
    line-height: 1;
    z-index: 1;
  }
`

export const Title = arg => <Wrapper {...arg}></Wrapper>
