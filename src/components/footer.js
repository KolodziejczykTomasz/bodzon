import * as React from "react"
import { MailIcon, PhoneIcon } from "./icons"
import { Title } from "../components/title"
import styled from "styled-components"

const Section = styled.div`
  min-height: 400px;
  height: auto;
  width: 100%;
  background-color: #f0f0f0;
  color: black;
  padding-top: 50px;
`

const Wrapper = styled.div`
  display: grid;
  align-items: end;
  width: 100%;
`

const Content = styled.div`
  display: grid;
  padding: 0 144px;
  justify-items: left;
  align-items: start;
  min-height: 350px;
  height: auto;
  width: 100%;
  margin-bottom: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
    justify-items: center;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 720px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
  @media (min-width: 721px) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 144px;
    width: 100%;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Copyright = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  width: 100%;
  color: #606060;
  font-size: 15px;
  font-weight: 300;
  border-top: 1px solid #0757a0;
  & div:nth-child(3) {
    width: 100%;
    text-align: right;
    justify-items: right;
    padding-right: 5px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const CompanyName = styled.div`
  width: 100%;
  height: 100px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  color: #0757a0;
  & span {
    display: block;
  }
`

const TitleFooter = styled.div`
display: flex:
flex-direction: column;
 justify-content: left;
 align-items: center;
  line-height: 27px;
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: 700;
  color: #606060;
  @media (max-width: 480px) {
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
    @media (min-width: 481px) and (max-width: 766px) {
   display: flex:
    flex-direction: column;
    justify-content: left;
    align-items: center;
 height: 50px;
  width: 100%;
 
  }
  @media (min-width: 767px) and (max-width: 960px) {
     display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;
 height: 50px;
  width: 100%;
 
  }
  @media (min-width: 961px) and (max-width: 1025px) {
     display: flex:
 height: 50px;
  width: 100%;
  
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
     display: flex:
 height: 50px;
  width: 100%;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: auto;
  margin-left: -30px;
  list-style-type: none;
  @media (max-width: 480px) {
    display: block;
    width: 100%;
    margin: 0 auto;
    margin-left: -40px;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    list-style-type: none;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    list-style-type: none;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    list-style-type: none;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    list-style-type: none;
  }
`

const ListItem = styled.li`
  display: flex;
  width: 100%;
  line-height: 27px;
  font-size: 15px;
  font-weight: 300;

  & span {
    color: #0757a0;
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    min-width: 200px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    display: flex;
  }
  @media (min-width: 767px) and (max-width: 960px) {
    display: flex;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    display: flex;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    display: flex;
  }
`

export const Footer = () => (
  <Section id="footer">
    <Wrapper>
      <Content>
        <div>
          <CompanyName>
            <span>
              Usługi Remontowo - Budowlane <span>Kamil Bodzon</span>
            </span>
          </CompanyName>
          <Title isSmall>Adres biura</Title>
          <div>
            <List>
              <ListItem>Sigajny 11/2</ListItem>
              <ListItem>11-220 Górowo Iławeckie</ListItem>
            </List>
          </div>
        </div>
        <div>
          <TitleFooter>Dane kontaktowe</TitleFooter>
          <div>
            <List>
              <ListItem>
                <span>
                  <PhoneIcon />
                </span>
                +48 577 802 869
              </ListItem>
              <ListItem>
                <span>
                  <MailIcon />
                </span>
                kajtek46@onet.pl
              </ListItem>
            </List>
          </div>
        </div>
        <div>
          <TitleFooter>Na skróty</TitleFooter>
          <div>
            <List>
              <ListItem>Start</ListItem>
              <ListItem>Firma</ListItem>
              <ListItem>Realizacje</ListItem>
              <ListItem>Usługi</ListItem>
              <ListItem>Kontakt</ListItem>
              <ListItem>RODO</ListItem>
            </List>
          </div>
        </div>
      </Content>
      <Copyright>
        <div></div>
        <div>Copyright © {new Date().getFullYear()}</div>
        <div style={{ color: "#0757A0" }}>NETTOM24</div>
      </Copyright>
    </Wrapper>
  </Section>
)
