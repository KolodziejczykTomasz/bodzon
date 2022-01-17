import React from "react"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Section = styled.div`
display: block;
  max-height: 600px;
  height: auto;
  object-fit: cover;
  overflow: hidden;
 
`

export const Hero = () => {
  return (
    <Section id="hero">
      <Carousel>
        <Carousel.Item>
          <StaticImage
            className="d-block w-100"
            src="../images/hero.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </Section>
  )
}
