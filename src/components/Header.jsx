import { useState, useCallback, useEffect } from "react"
import { HamburgerSqueeze } from "react-animated-burgers"
import Navigation from "./Navigation"

function getWindowSize() {
  const { innerWidth } = window
  return { innerWidth }
}

function Header() {
  const [isActive, setIsActive] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  )

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  if (windowSize.innerWidth < 963) {
    return (
      <div>
        <HamburgerSqueeze
          className="burger"
          barColor="black"
          {...{ isActive, toggleButton }}
        />
        {isActive && (
          <div onClick={console.log(isActive)}>
            <Navigation />
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}

export default Header
