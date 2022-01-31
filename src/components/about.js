import React, { useEffect } from "react"
import { Title } from "./title"
import { Description } from "./description"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

import styled from "styled-components"

const Section = styled.div`
  display: block;
  min-height: 400px;
  padding: 40px 0;
  height: auto;
  background-color: #262626;
  color: white;
`
const Container = styled.div`
  display: grid;
  padding: 40px 144px 0 144px;
  grid-template-columns: 1fr 1fr;
  gap: 20px 20px;
  height: 100%;
  width: 100%;

  & div:nth-child(1) {
    justify-self: center;
    padding: 10px 10px;

    & p:last-child {
      padding-bottom: 20px;
    }
  }

  & div:nth-child(2) {
    justify-self: center;
    padding: 10px 10px;

    & p:last-child {
      padding-bottom: 20px;
    }
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

const TextWrapper = styled.div`
  display: grid;
  justify-self: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: 0 0 5px -1px rgba(194, 194, 194, 1);
  -moz-box-shadow: 0 0 5px -1px rgba(194, 194, 194, 1);
  box-shadow: 0 0 5px -1px rgba(194, 194, 194, 1);
`

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 40px;
`

const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  const wrapperRef = React.useRef(null)
  const wrapperRefFirst = React.useRef(null)
  const wrapperRefSecond = React.useRef(null)

  useEffect(() => {
    gsap.fromTo(
      [wrapperRefFirst.current, wrapperRefSecond.current],
      { opacity: "0", y: "+=150px" },
      {
        opacity: "1",
        y: "0",
        stagger: "0.2",
        ease: "easeInOut",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top+=500",
        },
      }
    )
  }, [])

  return (
    <Section id="about">
      <WrapperTitle>
        <Title isCenter>O firmie</Title>
      </WrapperTitle>
      <Container ref={wrapperRef}>
        <TextWrapper ref={wrapperRefFirst}>
          <Description>
            <p>
              Moja firma budowlana mieści się w Sigajnach koło Górowa
              Iławeckiego, na terenie województwa warmińsko-mazurskiego.
            </p>

            <p>
              Zajmuje się obsługą Klientów indywidualnych oraz firm w zakresie
              profesjonalnych prac wykończeniowych. Wykończenia wnętrz to moja
              specjalność.
            </p>
            <p>
              Wystarczy przedstawić mi swój pomysł bądź projekt, a ja sporządzę
              darmową wycenę, udzielę doradztwa technicznego i materiałowego, a
              także przystąpię do prac.
            </p>
          </Description>
        </TextWrapper>
        <TextWrapper ref={wrapperRefSecond}>
          <Description>
            <p>
              Mogę także zapewnić remont od A do Z, co znaczy, że przeprowadzę
              wszelkie prace remontowe, które pozwolą odmienić wnętrza pokoi,
              kuchni i łazienek tak, jak życzą sobie tego Klienci.
            </p>
            <p>
              Uzupełnieniem mojej oferty są usługi elektryczne i hydrauliczne.
              Wykonam instalacje elektryczne w domach i mieszkaniach zgodnie z
              najwyższymi standardami. Gwarantuję miłą i kompetentną obsługę
              oraz atrakcyjne ceny.
            </p>
            <p>Serdecznie zapraszam do kontaktu.</p>
          </Description>
        </TextWrapper>
      </Container>
    </Section>
  )
}

export default About
