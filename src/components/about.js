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
        <Title isCenter>O firmie</Title>
      </WrapperTitle>
      <Container>
        <Description>
          <p>
            Moja firma budowlana mieści się w Sigajnach koło Górowa Iławeckiego, na
            terenie województwa warmińsko-mazurskiego.
          </p>

          <p>
            Zajmuje się obsługą Klientów indywidualnych oraz firm w zakresie
            profesjonalnych prac wykończeniowych. Wykończenia wnętrz to moja
            specjalność, co potwierdza każdy zadowolony Klient, dla którego
            miałem przyjemność realizować moje usługi.
          </p>
          <p>
            Wystarczy przedstawić mi swój pomysł bądź projekt, a ja sporządzę
            darmową wycenę, udzielę doradztwa technicznego i materiałowego, a
            także przystąpię do prac. Proponuję wiele usług budowlanych.
            Wśród nich mogę zaoferować zbrojenia w konstrukcjach betonowych,
            montaż płyt gipsowo - kartonowych, malowanie i tapetowanie, a także usługi
            wyburzeniowe.
          </p>
          <p>
            Mogę także zapewnić remont od A do Z, co znaczy, że
            przeprowadzę wszelkie prace remontowe, które pozwolą odmienić
            wnętrza pokoi, kuchni i łazienek tak, jak życzą sobie tego Klienci.
          </p>
          <p>
            Uzupełnieniem mojej oferty są usługi elektryczne i hydrauliczne.
            Wykonam instalacje elektryczne w domach i mieszkaniach zgodnie z
            najwyższymi standardami. Gwarantuję miłą i kompetentną obsługę
            oraz atrakcyjne ceny.
          </p>
          <p>Serdecznie zapraszam do kontaktu.</p>
        </Description>
      </Container>
    </Section>
  )
}

export default About
