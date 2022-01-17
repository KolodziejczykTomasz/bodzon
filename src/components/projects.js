import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"


const Section = styled.div`
  height: 400px;
  padding: 40px 0;
`
const Container = styled.div`
  display: grid;
  padding: 0 144px;
  margin: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  height: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const PhotoWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const Projects = () => (
  <Section id="projects">
    <Container>
      <PhotoWrapper>
        <StaticImage
          src="../images/project_1.jpg"
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
          src="../images/project_2.jpg"
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
          src="../images/project_3.jpg"
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
          src="../images/project_4.jpg"
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
