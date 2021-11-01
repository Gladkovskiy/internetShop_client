import React, {useRef, useEffect, useState} from 'react'
import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'

import device from '../../store/DeviceStore'
import {getBrand} from '../../http/deviceAPI'
import {observer} from 'mobx-react-lite'

const CreateBrande = ({show, onHide, addItem, deleteItem}) => {
  const controlType = useRef()
  const [selectedBrand, setSelectedBrand] = useState()

  const getBrandAsync = async () => {
    const brand = await getBrand()
    device.setBrand(brand)
  }

  useEffect(() => {
    getBrandAsync()
  }, [show])

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Бренд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            ref={controlType}
            placeholder="Введите название бренда"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <Row style={{width: '60%'}}>
          <Col md={4}>
            <Dropdown>
              <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brand.map(item => (
                  <Dropdown.Item
                    key={item.id}
                    onClick={() => {
                      setSelectedBrand(item.name)
                    }}
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={4} className="text-center align-self-center">
            {selectedBrand}
          </Col>
          <Col md={4}>
            <Button
              disabled={!selectedBrand}
              variant="outline-danger"
              onClick={() => {
                deleteItem(selectedBrand)
                setSelectedBrand()
              }}
            >
              Удалить
            </Button>
          </Col>
        </Row>
        <div>
          <Button variant="outline-danger" onClick={onHide}>
            Закрыть
          </Button>
          <Button
            variant="outline-success"
            onClick={() => addItem(controlType.current.value)}
          >
            Добавить
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default observer(CreateBrande)
