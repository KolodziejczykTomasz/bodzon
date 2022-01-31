import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { FacebookIcon, GeoIcon, PhoneIcon } from "./icons"

import "./header.css"

const navbar = { backgroundColor: "#262626", borderBottom: "1px solid grey" }

export const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid grey",
          height: "30px",
          width: "100%",
          backgroundColor: " #262626",
          color: "white",
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
      <Navbar collapseOnSelect expand="lg" sticky="top" style={navbar}>
        <Container
          style={{
            width: "100%",
            padding: "0 5px",
            backgroundColor: "#262626",
            color: "white",
          }}
        >
          <Navbar.Brand href="#home">
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifySelf: "left",
                fontWeight: "700",
                fontSize: "15px",
                color: "white",
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
                  color: "white",
                  paddingBottom: "4px",
                }}
                className="underline"
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
                textTransform: "uppercase",
              }}
            >
              <Nav.Link id="navlink" href="#hero" style={{ width: "10%" }}>
                Start
              </Nav.Link>
              <Nav.Link id="navlink" href="#about" style={{ width: "10%" }}>
                Firma
              </Nav.Link>
              <Nav.Link id="navlink" href="#services" style={{ width: "10%" }}>
                Usługi
              </Nav.Link>
              <Nav.Link id="navlink" href="#footer" style={{ width: "10%" }}>
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
