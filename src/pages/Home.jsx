import { Button } from "@mui/material"
import { useState, useEffect } from "react"

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = img.onabort = function () {
      reject(src)
    }
    img.src = src
  })
}

function Home({ idPicture }) {
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [image, setImage] = useState()

  useEffect(() => {
    // const loading = async () => {
    //   const image = await preloadImage(idPicture)
    // }

    // loading()
    //   .then((image) => console.log(image))
    //   .catch(console.error)
    // console.log(loading())
    // setAssetsLoaded(assetsLoaded)
    const img = new Image()
    img.onload = function () {
      setAssetsLoaded(!assetsLoaded)
    }
    img.src = idPicture
  }, [])

  if (!assetsLoaded) {
    return <p>Preloading Assets</p>
  }

  return (
    <main className="home">
      <div className="flex">
        <div>
          <div className="home__backTitle">PORTFOLIO</div>
          <div className="home__subTitle">J. Ponia</div>
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
    </main>
  )
}

export default Home
