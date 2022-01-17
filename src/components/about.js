import React from "react"
import { Title } from "../components/title"
import { Description } from "../components/description"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

const Section = styled.div`
  min-height: 400px;
  height: auto;
  padding: 40px 0;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 144px;
  width: 100%;
  height: 100%;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 5px;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 5px;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
`
const ColumnLeft = styled.div`
  width: 100%;
  height: 100%;
`

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 30px;
  @media (max-width: 480px) {
    padding: 0 5px;
  }

  @media (min-width: 481px) and (max-width: 766px) {
  }
  @media (min-width: 767px) and (max-width: 960px) {
  }
  @media (min-width: 961px) and (max-width: 1025px) {
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
  }
`

const ColumnRight = styled.div`
  width: 100%;
  height: 100%;
`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <ColumnLeft>
          <PhotoWrapper>
            <StaticImage
              src="../images/about.jpg"
              alt="firma"
              style={{
                display: "block",
                objectFit: "cover",
                width: "90%",
                height: "80%"
              }}
            />
          </PhotoWrapper>
        </ColumnLeft>
        <ColumnRight>
          <Title>O nas</Title>
          <Description>
            <p>
              Nasza oferta obejmuje kompleksowe wykonanie prac wykończeniowych
              na terenie Górowa Iławeckiego i okolic.
            </p>
            <p>
              Charakter oferowanych przez firmę remontowo - budowlaną Kamil
              Bodzon skupia się wokół remontów mieszkań, domów, biur, a także
              adaptacji pomieszczeń na lokale usługowe i biurowe.
            </p>
            <p>
              Świadczone przez naszą firmę usługi zawierają szeroką gamę prac
              remontowo- budowlanych przy wykorzystaniu materiałów o najwyższej
              jakości przez wykwalifikowanych, rzetelnych i skrupulatnych
              specjalistów.
            </p>
          </Description>
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default About
