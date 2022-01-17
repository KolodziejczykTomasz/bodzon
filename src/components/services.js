import React from "react"
import { Title } from "../components/title"
import { Description } from "../components/description"
import { CheckIcon } from "../components/icons"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"


const Section = styled.div`
  min-height: 400px;
  height: auto;
  background-color: #f0f0f0;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 144px;
  width: 100%;
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
    grid-template-columns: 1fr 1fr;
  }
`
const ColumnLeft = styled.div`
  width: 100%;
  height: 100%;
`
const ColumnRight = styled.div`
  width: 100%;
  height: 100%;
`

const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 5px;
`

const List = styled.ul`
  margin-left: -30px;
`

const ListItem = styled.li`
  display: flex;
  line-height: 27px;
  font-size: 15px;
  font-weight: 300;
  & span {
    display: flex;
    color: orange;
  }
`

export const Services = () => (
  <Section id="services">
    <Container>
      <ColumnLeft>
        <Title>Usługi</Title>
        <Description>
          <List>
            <ListItem>
              <CheckIcon isSmall />
              nowoczesne wykończenia wnętrz
            </ListItem>
            <ListItem>
              <CheckIcon isSmall />
              remonty, szpachlowanie, malowanie
            </ListItem>
            <ListItem>
              <CheckIcon isSmall />
              tynki strykturalne ozdobne
            </ListItem>
            <ListItem>
              <CheckIcon isSmall />
              zabudowy G.K.
            </ListItem>
            <ListItem>
              <CheckIcon isSmall />
              adaptacja poddaszy
            </ListItem>
            <ListItem>
              <CheckIcon isSmall />
              elewacje, docieplenia
            </ListItem>
            <ListItem>
              <CheckIcon isSmall />
              łazienki, flizy, terakota, kamień
            </ListItem>
          </List>
        </Description>
      </ColumnLeft>
      <ColumnRight>
        <PhotoWrapper>
          <StaticImage
            src="../images/servises.png"
            alt="Usługi"
            style={{
              display: "block",            
              objectFit: "fill",
            }}
          />
        </PhotoWrapper>
      </ColumnRight>
    </Container>
  </Section>
)
