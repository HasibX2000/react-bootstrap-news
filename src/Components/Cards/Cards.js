import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import './Cards.css'

const Cards = (props) => {
  const { title, description, urlToImage, author, url } = props.post

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Posted By : {author}</Card.Text>
          <Button href={url} target="_blank" variant="danger">
            Read Full News
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Cards
