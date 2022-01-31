import React from "react"
import { Title } from "./title"
import { Description } from "./description"
import { CheckIcon } from "./icons"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  min-height: 400px;
  padding: 40px 0;
  height: auto;
  background-color: #262626;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px 144px;
  width: 100%;
  height: 100%;
  color: white;
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
  color: white;
`
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: left;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
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
  color: white;

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
              remonty
            </ListItem>
            <ListItem>
              <CheckIcon />
              wykończenia wnętrz
            </ListItem>
            <ListItem>
              <CheckIcon />
              adaptacje pomieszczeń
            </ListItem>
            <ListItem>
              <CheckIcon />
              układanie glazury i terakoty
            </ListItem>
            <ListItem>
              <CheckIcon />
              malowanie
            </ListItem>
            <ListItem>
              <CheckIcon />
              szpachlowanie
            </ListItem>
            <ListItem>
              <CheckIcon />
              zabudowy z płyt gipsowo- kartonowych - regipsy
            </ListItem>
            <ListItem>
              <CheckIcon />
              sufity podwieszane
            </ListItem>
            <ListItem>
              <CheckIcon />
              układanie paneli
            </ListItem>
          </List>
        </Description>
      </ColumnLeft>
      <ColumnRight>
        <Description>
          <List>
            <ListItem>
              <CheckIcon />
              instalacje hydrauliczne
            </ListItem>
            <ListItem>
              <CheckIcon />
              instalacje elektryczne
            </ListItem>
            <ListItem>
              <CheckIcon />
              biały montaż
            </ListItem>
            <ListItem>
              <CheckIcon />
              układanie kostki brukowej
            </ListItem>
            <ListItem>
              <CheckIcon />
              stan surowy
            </ListItem>
            <ListItem>
              <CheckIcon />
              budowa domów od podstaw
            </ListItem>
            <ListItem>
              <CheckIcon />
              pokrycie dachów
            </ListItem>
            <ListItem>
              <CheckIcon />
              montaż okien i drzwi
            </ListItem>
            <ListItem>
              <CheckIcon />
              oraz wiele innych prac , wedle życzenia klienta
            </ListItem>
          </List>
        </Description>
      </ColumnRight>
    </Container>
  </Section>
)
