import { Button } from "@mui/material"
import "bootstrap/dist/css/bootstrap.min.css"
import { projects } from "../utils/projects"
import Container from "react-bootstrap/Container"
import { Paper } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconButton from "@mui/material/IconButton"

function Projects() {
  //   useEffect(() => {
  //     projects.map((project) => {
  //       Promise.all([
  //         fetch(
  //           `https://api.github.com/repos/Popy49/${project.id}/languages`
  //         ).then((value) => value.json()),
  //         fetch(`https://api.github.com/repos/Popy49/${project.id}`, {
  //           method: "GET",
  //           headers: {
  //             Authorization: "Bearer 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",
  //           },
  //         }).then((value) => value.json()),
  //       ])
  //         .then((value) => {
  //           project.progress = value[0]
  //           project.urlCode = value[1].html_url
  //           //json response
  //         })
  //         .catch((err) => {
  //           console.log(err)
  //         })
  //     })
  //   }, [])

  // const { data, isLoading, error } = useFetch(
  //   `https://api.github.com/repos/Popy49/P11_Kasa/languages`
  // )

  return (
    <main className="home">
      <Container fluid className="gridList">
        {projects.map((project, index) => {
          return (
            <Paper elevation={3} className="flex-mid carded " key={index}>
              <img
                className="grid__picture"
                src={require(`../assets/mock/${project.urlPicture}`)}
                alt="mock"
                width={500}
                height={400}
              />
              <div className="flex-mid">
                <div className="grid__subTitle">{project.name}</div>
                <div className="margin-s">
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
                    href={`${project.urlDemo}`}
                  >
                    Demo
                  </Button>
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
                    href={`https://github.com/Popy49/${project.id}`}
                  >
                    Code
                  </Button>
                </div>
                <div>
                  {project.icons.map((icon, index) => {
                    return (
                      <IconButton aria-label="technologie" key={index}>
                        <FontAwesomeIcon className="icons" icon={icon} />
                      </IconButton>
                    )
                  })}
                </div>
                {/* <ProgressBar>
                    {Object.keys(project.progress).map((key, i) => (
                      <ProgressBar
                        className={key.toLowerCase()}
                        now={project.progress[key] / 100}
                        key={i}
                        label={key}
                      />
                    ))}
                  </ProgressBar> */}
              </div>
              <Paper />
            </Paper>
          )
        })}
      </Container>
    </main>
  )
}

export default Projects
