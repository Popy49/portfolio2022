import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function CardStyle({ title, text, button1, button2 }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../assets/mock/mock2.png`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{button1}</Button>
        <Button variant="primary">{button2}</Button>
      </Card.Body>
    </Card>
  )
}

export default CardStyle
