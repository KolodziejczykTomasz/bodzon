import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  height: auto;
  padding: 40px 0;
`
const Container = styled.div`
  display: grid;
  padding: 0 144px;
  grid-template-columns: 1fr 1fr;
  gap: 20px 20px;
  height: 100%;
  width: 100%;
  & div:nth-child(1) {
    justify-self: center;
  }
  & div:nth-child(2) {
    justify-self: center;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
    & div:nth-child(1) {
      justify-self: center;
    }
    & div:nth-child(2) {
      justify-self: center;
    }
  }

  @media (min-width: 481px) and (max-width: 799px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
    & div:nth-child(1) {
      justify-self: center;
    }
    & div:nth-child(2) {
      justify-self: center;
    }
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 5px;
    & div:nth-child(1) {
      justify-self: right;
    }
    & div:nth-child(2) {
      justify-self: left;
    }
  }
`

const PhotoWrapper = styled.div`
  display: grid;
  justify-self: center;
  align-items: center;
  width: 80%;
  height: 90%;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
  box-shadow: 0px 0px 21px -4px rgba(194, 194, 194, 1);
`

export const Projects = () => (
  <Section id="projects">
    <Container>
      <PhotoWrapper>
        <StaticImage
          src="../images/servis.png"
          alt="Projekt zrealizowany"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <StaticImage
          src="../images/servis1.png"
          alt="Projekt zrealizowany"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </PhotoWrapper>
    </Container>
  </Section>
)
