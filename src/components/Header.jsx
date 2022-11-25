import { useState, useLayoutEffect, useEffect } from "react"
import { HamburgerSqueeze } from "react-animated-burgers"
import Navigation from "./Navigation"
import { NavLink, useLocation } from "react-router-dom"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Container } from "react-bootstrap"
import logo from "../assets/marguerite.webp"

function Header() {
  const [isActive, setIsActive] = useState(false)

  const [classShrink, setClassShrink] = useState("header flex-center")

  //STYLE change when scrolling
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const shrinkPosition = 200
    if (shrinkPosition < scrollPosition) {
      setClassShrink("header--small")
    } else {
      setClassShrink("header")
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, true)
    return () => window.removeEventListener("scroll", handleScroll, true)
  }, [])

  //Scrolling react router issue resolution
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0)
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView()
        }
      }, 0)
    }
  }, [pathname, hash, key])

  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      className={classShrink}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width={40}
            height={40}
            className="header__logoImage"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projets</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

  // if (windowSize.innerWidth < 963) {
  //   return (
  //     <div>
  //       <HamburgerSqueeze
  //         className="burger"
  //         barColor="black"
  //         {...{ isActive, toggleButton }}
  //       />
  //       {isActive && (
  //         <div className="header flex-center">
  //           <NavLink
  //             end
  //             onClick={() => setIsActive(!isActive)}
  //             to="/"
  //             activeclassname="active"
  //           >
  //             Home
  //           </NavLink>
  //           <NavLink
  //             onClick={() => setIsActive(!isActive)}
  //             to="/projects"
  //             activeclassname="active"
  //           >
  //             Projects
  //           </NavLink>
  //           <NavLink
  //             onClick={() => setIsActive(!isActive)}
  //             to={{
  //               pathname: "/",
  //               hash: "#contact",
  //             }}
  //             activeclassname="active"
  //             preventScrollReset={true}
  //           >
  //             About
  //           </NavLink>
  //           <NavLink
  //             onClick={() => setIsActive(!isActive)}
  //             to={{
  //               pathname: "/",
  //               hash: "#contact",
  //             }}
  //             activeclassname="active"
  //           >
  //             Contact
  //           </NavLink>
  //         </div>
  //       )}
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <Navigation />
  //     </div>
  //   )
  // }
}

export default Header
