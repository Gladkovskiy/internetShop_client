/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Image, Row} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

import bigStar from '../assets/bigStar.png'
import {getOneDevice} from '../http/deviceAPI'

const DevicePage = () => {
  /*  const device = {
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
  ] */

  const [device, setDevice] = useState({info: []})
  const {id} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getOneDeviceAsync = async () => {
      const device = await getOneDevice(id)
      setDevice(device)
      setLoading(false)
    }
    getOneDeviceAsync()
  }, [])

  if (loading)
    return (
      <Spinner
        animation="border"
        role="status"
        style={{position: 'absolute', left: '50%', top: '50%'}}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )

  return (
    <Container>
      <Row className="mt-3 align-content-center">
        <Col md={4}>
          <Image
            src={process.env.REACT_APP_API_URL + '/' + device.img}
            width={300}
          />
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
        <h3>ХАРАКТЕРИСТИКИ</h3>
        {device.info.map((desc, index) => (
          <Row key={desc.id}>
            <Col
              className="p-2"
              md={2}
              style={{background: index % 2 === 0 ? 'grey' : 'transparent'}}
            >
              {desc.title + ':'}
            </Col>
            <Col
              className="p-2"
              md={1}
              style={{background: index % 2 === 0 ? 'grey' : 'transparent'}}
            >
              {desc.description}
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
