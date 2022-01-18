import React from "react"
import Iframe from "react-iframe"
import { Title } from "../components/title"
import styled from "styled-components"

const Section = styled.div`
display: block;
  height: auto;
  padding: 40px 0;
`
const Container = styled.div`
  display: grid;
  padding: 0 144px;
  margin: 0;
  grid-template-columns: 1fr;
  height: 100%;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    padding: 0 5px;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    padding: 0 5px;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    padding: 0 5px;
  }
`
const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Maps = () => (
  <Section id="map">
    <Container>
      <WrapperTitle>
        <Title isCenter>Jak dojechać?</Title>
      </WrapperTitle>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d149062.44045658738!2d20.312419494045514!3d54.284486213668764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2e57c7597ff09%3A0x67ec12d1673dc0cb!2s11-220%20Galiny!5e0!3m2!1spl!2spl!4v1642435600892!5m2!1spl!2spl"
        width="100%"
        height="450"
        loading="lazy"
      ></Iframe>
    </Container>
  </Section>
)
