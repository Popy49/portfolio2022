import React from "react"
import { TextField } from "@mui/material"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import { Button } from "@mui/material"

const SERVICE_ID = "service_qmo3sb5"
const TEMPLATE_ID = "template_fe753es"
const USER_ID = "Hkn1ma0-sjFdYp_LE"

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      }
    )
    e.target.reset()
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="standard"
        required
      />
      <TextField
        id="email"
        label="E-mail"
        type="email"
        variant="standard"
        required
      />
      <TextField
        id="message"
        label="Message"
        type="text"
        variant="standard"
        required
        multiline
        rows={4}
      />
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
        type="submit"
      >
        SEND
      </Button>
    </form>
  )
}

export default ContactForm
