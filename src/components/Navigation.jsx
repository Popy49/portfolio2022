import { Link, NavLink } from "react-router-dom"
import logo from "../assets/flower2.svg"
// import { Link, animateScroll as scroll } from "react-scroll"

const checkActive = (match, location) => {
  if (!location) return false
  const { pathname } = location
  console.log(pathname)
  return pathname === "/"
}

function Navigation() {
  return (
    <div className="header flex-center">
      <NavLink end to="/" activeclassname="active" isactive={checkActive}>
        Home
      </NavLink>
      <NavLink to="/projects" activeclassname="active">
        Projects
      </NavLink>
      <Link to={`/`} className="flex-center">
        <img
          width={40}
          height={40}
          className="header__logoImage"
          src={logo}
          alt="Logo"
        />
      </Link>
      <Link
        to="#about"
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={-70}
        // duration={200}
      >
        About
      </Link>
      <Link
        to="#contact"
        // activeClass="active"
        // spy={true}
        // smooth={true}
        // offset={-70}
        // duration={200}
      >
        Contact
      </Link>
    </div>
  )
}

export default Navigation
