import React from "react"
import { Title } from "../components/title"
import { Description } from "../components/description"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  min-height: 400px;
  padding: 40px 0;
  height: auto;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 144px;
  width: 100%;
  height: 100%;
  @media (max-width: 480px) {
    padding: 0 20px;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    padding: 0 5px;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    padding: 0 5px;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    padding: 0 20px;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    padding: 0 144px;
  }
`

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const About = () => {
  return (
    <Section id="about">
      <WrapperTitle>
        <Title isCenter>O mnie</Title>
      </WrapperTitle>
      <Container>
        <Description>
          <p>
            Nasza firma budowlana mieści się w Górowie Iławeckim, na terenie
            województwa warmińsko-mazurskiego. Właścicielem jest Kamil Bodzon.
          </p>

          <p>
            Zajmujemy się obsługą Klientów indywidualnych oraz firm w zakresie
            profesjonalnych prac wykończeniowych. Wykończenia wnętrz to nasza
            specjalność, co potwierdza każdy zadowolony Klient, dla którego
            mieliśmy przyjemność realizować nasze usługi.
          </p>
          <p>
            Wystarczy przedstawić nam swój pomysł bądź projekt, a my sporządzimy
            darmową wycenę, udzielimy doradztwa technicznego i materiałowego, a
            także przystąpimy do prac. Proponujemy wiele usług budowlanych.
            Wśród nich możemy zaoferować zbrojenia w konstrukcjach betonowych,
            montaż płyt g-k, malowanie i tapetowanie, a także usługi
            wyburzeniowe.
          </p>
          <p>
            Możemy także zapewnić remonty od A do Z, co znaczy, że
            przeprowadzimy wszelkie prace remontowe, które pozwolą odmienić
            wnętrza pokoi, kuchni i łazienek tak, jak życzą sobie tego Klienci.
          </p>
          <p>
            Uzupełnieniem naszej oferty są usługi elektryczne i hydrauliczne.
            Wykonamy instalacje elektryczne w domach i mieszkaniach zgodnie z
            najwyższymi standardami. Gwarantujemy miłą i kompetentną obsługę
            oraz atrakcyjne ceny.
          </p>
          <p>Serdecznie zapraszamy do kontaktu.</p>
        </Description>
      </Container>
    </Section>
  )
}

export default About
