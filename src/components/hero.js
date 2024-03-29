import React from "react"
import { Button } from "./button"
import { Link } from "gatsby"
import background from "../images/hero.png"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  min-height: 650px;
  height: auto;
  background-color: #262626;
  color: white;
  border-bottom: 1px solid grey;
`
const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 650px;
  padding-top: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${background});
`

const CompanyName = styled.div`
  padding: 75px 20px;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 67px;
  font-size: 56px;
  font-weight: 700;
  color: white;

  & span {
    display: block;
  }

  @media (max-width: 480px) {
    padding: 75px 10px;
  }
  @media (min-width: 481px) and (max-width: 600px) {
  }
  @media (min-width: 601px) and (max-width: 960px) {
  }
  @media (min-width: 961px) and (max-width: 1025px) {
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
  }
`

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Hero = () => {
  return (
    <Section id="hero">
      <Wrapper>
        <CompanyName>
          <span>
            Usługi Remontowo - Budowlane <span>Kamil Bodzon</span>
          </span>
        </CompanyName>
        <WrapperButton>
          <Link href="#footer">
            <Button>Zapytaj o wycenę</Button>
          </Link>
        </WrapperButton>
      </Wrapper>
    </Section>
  )
}
