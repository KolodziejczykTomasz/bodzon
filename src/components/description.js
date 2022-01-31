import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  padding: 30px 0;

  p,
  li {
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;
  }
`

export const Description = ({ children }) => <Wrapper>{children}</Wrapper>
