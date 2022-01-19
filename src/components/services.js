import React from "react"
import { Title } from "../components/title"
import { Description } from "../components/description"
import { CheckIcon } from "../components/icons"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  min-height: 400px;
  padding: 40px 0;
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
  display: flex;
  flex-direction: column;
  justify-self: left;
  align-items: center;
  width: 100%;
  height: 100%;
`
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: left;
  align-items: center;
  width: 100%;
  height: 100%;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -30px;
`

const ListItem = styled.li`
  display: flex;
  text-align: left;
  line-height: 27px;
  font-size: 15px;
  font-weight: 300;
  & span {
    display: flex;
    color: orange;
  }
`
const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Services = () => (
  <Section id="services">
    <WrapperTitle>
      <Title isCenter>Usługi</Title>
    </WrapperTitle>
    <Container>
      <ColumnLeft>
        <Description>
          <List>
            <ListItem>
              <CheckIcon />
              nowoczesne wykończenia wnętrz
            </ListItem>
            <ListItem>
              <CheckIcon />
              remonty, szpachlowanie, malowanie
            </ListItem>
            <ListItem>
              <CheckIcon />
              tynki strykturalne ozdobne
            </ListItem>
            <ListItem>
              <CheckIcon />
              zabudowy G.K.
            </ListItem>
            <ListItem>
              <CheckIcon />
              adaptacja poddaszy
            </ListItem>
            <ListItem>
              <CheckIcon />
              elewacje, docieplenia
            </ListItem>
            <ListItem>
              <CheckIcon />
              łazienki, flizy, terakota, kamień
            </ListItem>
          </List>
        </Description>
      </ColumnLeft>
      <ColumnRight>
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
              <CheckIcon />
              tynki strykturalne ozdobne
            </ListItem>
            <ListItem>
              <CheckIcon />
              zabudowy G.K.
            </ListItem>
            <ListItem>
              <CheckIcon />
              adaptacja poddaszy
            </ListItem>
            <ListItem>
              <CheckIcon />
              elewacje, docieplenia
            </ListItem>
            <ListItem>
              <CheckIcon />
              łazienki, flizy, terakota, kamień
            </ListItem>
          </List>
        </Description>
      </ColumnRight>
    </Container>
  </Section>
)
