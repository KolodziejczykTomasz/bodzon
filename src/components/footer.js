import * as React from "react"
import { MailIcon, PhoneIcon } from "./icons"
import { Link } from "gatsby"
import { Title } from "../components/title"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  position: relative;
  min-height: 400px;
  height: auto;
  color: white;
  background-color: #262626;
`

const Wrapper = styled.div`
  display: block;
  width: 100%;
  padding-top: 50px;
`

const Content = styled.div`
  display: grid;
  padding: 40px 144px;
  justify-items: left;
  align-items: start;
  min-height: 350px;
  height: auto;
  width: 100%;
  margin-bottom: 30px;
  color: white;
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
    padding: 0 5px;
    justify-items: center;
    text-align: center;
  }
  @media (min-width: 721px) and (max-width: 960px) {
    grid-template-columns: 1fr 2fr 1fr;
    width: 100%;
    padding: 0 144px;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
`

const Copyright = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 50px;
  width: 100%;
  color: white;
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
    width: 100%;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
  @media (min-width: 961px) and (max-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
  @media (min-width: 1026px) and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
`

const CompanyName = styled.div`
  width: 100%;
  height: 100px;
  line-height: 24px;
  font-size: 20px;
  font-weight: 700;
  color: white;
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
  color: white;
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
    display: flex;
    text-align: center;
    justify-self: center;
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
  color: white;

  & a,
  a:link {
    color: white;
    text-decoration: none;
    transition: 0.1s;
  }
  & a:hover {
    text-decoration: none;
    color: #fece04;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    min-width: 200px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 766px) {
    display: flex;
    justify-content: center;
    min-width: 200px;
    width: 100%;
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
const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Footer = () => (
  <Section id="footer">
    <WrapperTitle>
      <Title isCenter isWhite>Napisz do nas</Title>
    </WrapperTitle>
    <Wrapper>
      <Content>
        <div>
          <CompanyName>
            <span>
              Usługi Remontowo - Budowlane <span>Kamil Bodzon</span>
            </span>
          </CompanyName>
          <TitleFooter>Adres biura</TitleFooter>
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
              <ListItem>
                <Link href="#hero">Start</Link>
              </ListItem>
              <ListItem>
                <Link href="#about">Firma</Link>
              </ListItem>
              <ListItem>
                <Link href="#services">Usługi</Link>
              </ListItem>
              <ListItem>
                <Link href="#hero">RODO</Link>
              </ListItem>
            </List>
          </div>
        </div>
      </Content>
      <Copyright>
        <div></div>
        <div>Copyright © {new Date().getFullYear()}</div>
        <div style={{ color: "#fece04" }}>NETTOM24</div>
      </Copyright>
    </Wrapper>
  </Section>
)
