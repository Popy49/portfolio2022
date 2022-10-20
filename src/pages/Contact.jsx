import ContactForm from "../components/ContactForm"
import Typography from "@mui/material/Typography"
import { Card } from "@mui/material"
import Divider from "@mui/material/Divider"
import { CardContent } from "semantic-ui-react"

function Contact({ idPicture }) {
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
        <ContactForm />
        <Card className="cards__item home__list--sm">
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Based in
            </Typography>
            <Divider variant="middle" />
            <li>Annecy</li>
            <li>Lyon</li>
            <li>Lausanne</li>
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
    </main>
  )
}

export default Contact
