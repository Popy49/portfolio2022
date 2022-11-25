import ContactForm from "../components/ContactForm"
import Typography from "@mui/material/Typography"
import { Card } from "@mui/material"
import Divider from "@mui/material/Divider"
import { CardContent } from "semantic-ui-react"

function Contact() {
  return (
    <section className="home__section" id="contact">
      <h1 className="home__partTitle">Contact me</h1>
      <div className="flex">
        <ContactForm />
        <Card className="cards__item home__list--sm">
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Based in
            </Typography>
            <Divider variant="middle" />
            <ul>
              <li>Annecy</li>
              <li>Lyon</li>
              <li>Lausanne</li>
            </ul>
          </CardContent>
        </Card>
        {/* <div className="home__list">
          <p>Based in</p>
          <ul>
            <li>Annecy</li>
            <li>Lyon</li>
            <li>Lausanne</li>
          </ul>
        </div> */}
      </div>
    </section>
  )
}

export default Contact
