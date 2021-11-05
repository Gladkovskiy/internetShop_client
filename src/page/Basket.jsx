import React from 'react'
import {observer} from 'mobx-react-lite'
import {Row, Col, Button, Container, ListGroup} from 'react-bootstrap'

import user from '../store/UserStore'
import useDeviceInBasket from '../http/react-query/basket/useDeviceInBasket'
import useDeleteDeviseInBasket from '../http/react-query/basket/useDeleteDeviseInBasket'

const Basket = () => {
  const queryDevices = useDeviceInBasket(user.user.basket)
  const mutaionDeleteDevice = useDeleteDeviseInBasket()

  return (
    <Container>
      <ListGroup>
        {queryDevices.data.map(item => (
          <ListGroup.Item variant="secondary" key={item.id}>
            <Row className="align-items-center">
              <Col>{item.device.name}</Col>
              <Col>{item.device.price}</Col>
              <Col>
                <Button
                  onClick={() => mutaionDeleteDevice.mutate({id: item.id})}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}

export default observer(Basket)
