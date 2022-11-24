import { Button } from "@mui/material"
import { useState } from "react"
import About from "./About"
import Contact from "./Contact"
import { Parallax } from "react-scroll-parallax"
import { useNavigate } from "react-router-dom"

// function preloadImage(src) {
//   return new Promise((resolve, reject) => {
//     const img = new Image()
//     img.onload = function () {
//       resolve(img)
//     }
//     img.onerror = img.onabort = function () {
//       reject(src)
//     }
//     img.src = src
//   })
// }

function Home({ idPicture }) {
  const navigate = useNavigate()
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [image, setImage] = useState()
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  const handleClickGlitch = () => {
    const abyss = document.getElementById("abyss")
    console.log(abyss)
    abyss.classList.toggle("displaynone")
    console.log(document.body.scrollHeight - 100)
    window.scrollTo(0, document.body.scrollHeight - 1200)
    setTimeout(
      () => navigate("/THEaBYSSAldvxdfjgLE-TIT-JEU:PATON-O-WISKIdyjdyj"),
      2000
    )
  }
  // useEffect(() => {
  //   // const loading = async () => {
  //   //   const image = await preloadImage(idPicture)
  //   // }

  //   // loading()
  //   //   .then((image) => console.log(image))
  //   //   .catch(console.error)
  //   // console.log(loading())
  //   // setAssetsLoaded(assetsLoaded)
  //   const img = new Image()
  //   img.onload = function () {
  //     setAssetsLoaded(!assetsLoaded)
  //   }
  //   img.src = idPicture
  // }, [])

  // if (!assetsLoaded) {
  //   return <p>Preloading Assets</p>
  // }

  return (
    <main className="home">
      <div className="glassCard">
        <div className="flex">
          <div>
            <h1 className="home__backTitle">PORTFOLIO</h1>
            <span className="home__subTitle">J. Ponia</span>
            <h1 className="home__title">Front-end developper</h1>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "neutralLight.main",
                  color: "white",
                },
              }}
              variant="contained"
              color="neutral"
              size="large"
              href={`/projects`}
            >
              View work
            </Button>
          </div>
          <div className="center">
            <img
              width={400}
              height={482}
              className="home__picture"
              src={idPicture}
              alt="J ponia illustration"
            />
          </div>
        </div>

        <About idPicture={idPicture} />
        <Parallax speed={-30}>
          <div onClick={() => handleClick()} className="slow" />
        </Parallax>
        <Parallax speed={30}>
          <div className="fast" />
          <div className="svgWrap" onClick={() => handleClickGlitch()}>
            <svg className="svgWrap__text">
              <use xlinkHref="#svgGlitch"></use>
            </svg>
            <svg className="svgWrap__text">
              <use xlinkHref="#svgGlitch"></use>
            </svg>
            <svg className="svgWrap__text">
              <use xlinkHref="#svgGlitch"></use>
            </svg>
          </div>

          <div className="hide" onClick={() => handleClickGlitch()}>
            <svg
              id="svgGlitch"
              className="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 841.9 595.3"
            >
              <g fill="#ffffff">
                <circle cx="420.9" cy="296.5" r="230" fillOpacity="50%" />
              </g>
            </svg>
          </div>
        </Parallax>
        <Contact />
      </div>
      <div className="svgWrap">
        <svg className="svgWrap__text">
          <use xlinkHref="#svgGlitch"></use>
        </svg>
        <svg className="svgWrap__text">
          <use xlinkHref="#svgGlitch"></use>
        </svg>
        <svg className="svgWrap__text">
          <use xlinkHref="#svgGlitch"></use>
        </svg>
      </div>

      <div className="hide">
        <svg
          id="svgGlitch"
          className="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 841.9 595.3"
        >
          <g fill="#ffffff">
            <circle cx="420.9" cy="296.5" r="200" />
          </g>
        </svg>
      </div>

      <div id="abyss" className="abyss displaynone"></div>
    </main>
  )
}

export default Home
