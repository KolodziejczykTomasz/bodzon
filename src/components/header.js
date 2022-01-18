import * as React from "react"
//import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FacebookIcon, PhoneIcon, GeoIcon } from "./icons"

import "./header.css"

export const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #0757A0",
          height: "30px",
          width: "100%",
        }}
      >
        <Navbar.Text
          style={{
            display: "flex",
            justifyContent: "left",
            fontSize: "12px",
            width: "100%",
          }}
        >
          <GeoIcon isSmall />
          Adres biura: Sigajny 11/2, 11-220 Górowo Iławeckie
        </Navbar.Text>
        <Navbar.Text
          style={{
            display: "flex",
            justifyContent: "right",
            fontSize: "12px",
            width: "100%",
            paddingRight: "5px",
          }}
        >
          <PhoneIcon isSmall />
          +48 577 802 869
        </Navbar.Text>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="light"
        sticky="top"
      >
        <Container style={{ width: "100%", padding: "0 5px" }}>
          <Navbar.Brand href="#home">
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifySelf: "left",
                fontWeight: "700",
                fontSize: "15px",
                color: "#0757A0",
              }}
            >
              Usługi Remontowo - Budowlane
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  color: "#0757A0",
                }}
              >
                Kamil Bodzon
              </span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Nav.Link id="navlink" href="#hero">
                Start
              </Nav.Link>
              <Nav.Link id="navlink" href="#about">
                Firma
              </Nav.Link>           
              <Nav.Link id="navlink" href="#services">
                Usługi
              </Nav.Link>
              <Nav.Link id="navlink" href="#footer">
                Kontakt
              </Nav.Link>
            </Nav>
            <Nav
              style={{
                justifyContent: "center",
              }}
            >
              <Nav.Link eventKey={2} href="#memes">
                <FacebookIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
