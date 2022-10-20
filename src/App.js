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
import Contact from "./pages/Contact"
import About from "./pages/About"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./utils/themes/theme"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import idPicture from "./assets/id5.webp"

const AnimatedSwitch = () => {
  const location = useLocation()
  return (
    <TransitionGroup className="max-width" width={100} height={100}>
      <CSSTransition key={location.key} classNames="alert" timeout={200}>
        <Routes>
          <Route exact path="/" element={<Home idPicture={idPicture} />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About idPicture={idPicture} />} />
          <Route path="/Contact" element={<Contact idPicture={idPicture} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

function App() {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const img = new Image()
  //   img.src = idPicture.fileName
  //   setIsLoading(!isLoading)
  // }, [])

  // if (!isLoading) {
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
  // }
}

export default App
