import React from 'react'
import {Button, Col, Container, Image, Row} from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 10000,
    rating: 5,
    img: 'https://content1.rozetka.com.ua/goods/images/big/30873055.jpg',
  }

  const description = [
    {id: 1, title: 'Оперативная память', description: '5 Гб'},
    {id: 2, title: 'Камера', description: '12 Мп'},
    {id: 3, title: 'Процессор', description: 'Snedgragon'},
    {id: 4, title: 'Количество ядер', description: '12'},
    {id: 5, title: 'Аккумулятор', description: '5000 mAh'},
  ]

  return (
    <Container>
      <Row className="mt-3 align-content-center">
        <Col md={4}>
          <Image src={device.img} width={300} />
        </Col>
        <Col md={4}>
          <h2 className="text-center">{device.name}</h2>
          <div
            style={{
              background: `url(${bigStar}) no-repeat center center`,
              backgroundSize: 'contain',
              width: 300,
              height: 300,
              margin: '0 auto',
              fontSize: 64,
            }}
            className="d-flex justify-content-center align-items-center"
          >
            {device.rating}
          </div>
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-evenly align-items-center"
          style={{border: '5px solid lightgray'}}
        >
          <h2 className="mb-3">Цена: {device.price} грн.</h2>
          <div>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <h2>ХАРАКТЕРИСТИКИ</h2>
        {description.map((desc, index) => (
          <Row
            className="p-3"
            key={desc.id}
            style={{background: index % 2 === 0 ? 'grey' : 'transparent'}}
          >
            <Col md={2}>{desc.title + ':'}</Col>
            <Col md={1}>{desc.description}</Col>
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
