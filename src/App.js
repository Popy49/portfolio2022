import "./styles/main.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./utils/themes/theme"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import idPicture from "./assets/id5.webp"
import { ParallaxProvider } from "react-scroll-parallax"
import ErrorPage from "./pages/ErrorPage"

const AnimatedSwitch = () => {
  const location = useLocation()

  return (
    <TransitionGroup className="max-width" width={100} height={100}>
      <CSSTransition key={location.key} classNames="alert" timeout={200}>
        <ParallaxProvider>
          <Routes>
            <Route exact path="/" element={<Home idPicture={idPicture} />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ParallaxProvider>
      </CSSTransition>
    </TransitionGroup>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <AnimatedSwitch />
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App
