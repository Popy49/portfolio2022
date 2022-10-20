import React from "react"
import { CardContent } from "semantic-ui-react"
import Typography from "@mui/material/Typography"
import { Card } from "@mui/material"
import Divider from "@mui/material/Divider"
import { useEffect, useState } from "react"

function About({ idPicture }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = idPicture.fileName
    setIsLoading(!isLoading)
  }, [])

  if (!isLoading) {
    return (
      <main className="home">
        <div className="flex">
          <div className="center">
            <img
              width={400}
              height={482}
              src={idPicture}
              className="home__picture"
              alt="J ponia illustration"
            />
          </div>
          <div className="home__list cards">
            <Card className="cards__item">
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  SKILLS
                </Typography>
                <Divider variant="middle" />
                <p>
                  Semantic HTML - Responsive Design - DOM manipulation - UI
                  Engineering - Accessibility - OOP - MVC - RESTful APIs - TDD /
                  BDD - Unit Testing - Refactoring - Deployment - Relational
                  Databases - Version Control - Git Flow
                </p>
              </CardContent>
            </Card>
            <Card className="cards__item">
              <CardContent>
                <Typography gutterBottom variant="h2" component="div">
                  TECHNOLOGY
                </Typography>
                <Divider variant="middle" />
                <p>
                  HTML5 - CSS3 - SCSS - JavaScript - Webpack - React - Redux -
                  Material UI - Bootstrap - MySQL - NodeJS - RSpec - Jest - REST
                  APIs - NPM - Git - Figma
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    )
  }
}

export default About
