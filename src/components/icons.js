import React from "react"
import { FaFacebook } from "react-icons/fa"
import { BiMobile } from "react-icons/bi"
import { BiEnvelope } from "react-icons/bi"
import { BsFillGeoAltFill } from "react-icons/bs"
import { BsCheck2 } from "react-icons/bs"

import styled from "styled-components"

const Wrapper = styled.div`
  padding: 0 10px;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "22px")};
  color: #0757A0;
`

const WrapperPhoneIcon = styled.div`
  padding: 0 5px;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "18px")};
  color: #0757A0;
  margin-top: -3px;
`
const WrapperMailIcon = styled.div`
  padding: 0 5px;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "18px")};
  color: #0757A0;
  margin-top: -3px;
`

const WrapperGeoIcon = styled.div`
  padding: 0 5px;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "18px")};
  color: #0757A0;
  margin-top: -3px;
`
const WrapperCheckIcon = styled.div`
  padding: 0 7px 0 0;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "18px")};
  color: #0757A0;  
`

export const FacebookIcon = arg => {
  return (
    <Wrapper {...arg}>
      <FaFacebook />
    </Wrapper>
  )
}

export const PhoneIcon = arg => {
  return (
    <WrapperPhoneIcon {...arg}>
      <BiMobile />
    </WrapperPhoneIcon>
  )
}

export const MailIcon = arg => {
  return (
    <WrapperMailIcon {...arg}>
      <BiEnvelope />
    </WrapperMailIcon>
  )
}

export const GeoIcon = arg => {
  return (
    <WrapperGeoIcon {...arg}>
      <BsFillGeoAltFill />
    </WrapperGeoIcon>
  )
}

export const CheckIcon = arg => {
  return (
    <WrapperCheckIcon {...arg}>
      <BsCheck2 />
    </WrapperCheckIcon>
  )
}
