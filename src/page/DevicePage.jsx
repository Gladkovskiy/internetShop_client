/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Button, Col, Container, Image, Row} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

import bigStar from '../assets/bigStar.png'
import useGetOneDevice from '../http/react-query/devices/useGetOneDevice'
import useAddDevicetoBasket from '../http/react-query/basket/useAddDevicetoBasket'
import user from '../store/UserStore'

const DevicePage = () => {
  const {id} = useParams()

  const queryOneDevice = useGetOneDevice(id)
  const {data} = queryOneDevice

  const mutateDevicetoBasket = useAddDevicetoBasket()

  if (queryOneDevice.isLoading)
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
            src={process.env.REACT_APP_API_URL + '/' + data.img}
            width={300}
          />
        </Col>
        <Col md={4}>
          <h2 className="text-center">{data.name}</h2>
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
            {data.rating}
          </div>
        </Col>
        <Col
          md={4}
          className="d-flex flex-column justify-content-evenly align-items-center"
          style={{border: '5px solid lightgray'}}
        >
          <h2 className="mb-3">Цена: {data.price} грн.</h2>
          <div>
            <Button
              variant="outline-dark"
              onClick={() =>
                mutateDevicetoBasket.mutate({
                  basketId: user.user.basket,
                  deviceId: data.id,
                })
              }
            >
              Добавить в корзину
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <h3>ХАРАКТЕРИСТИКИ</h3>

        {data.info.map((desc, index) => (
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
