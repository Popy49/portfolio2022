import { Link, NavLink } from "react-router-dom"
import logo from "../assets/flower2.svg"

function Navigation() {
  return (
    <div className="header flex-center">
      <NavLink to="/" activeclassname="active">
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
      <NavLink to="/about" activeclassname="active">
        About
      </NavLink>
      <NavLink to="/contact" activeclassname="active">
        Contact
      </NavLink>
    </div>
  )
}

export default Navigation
