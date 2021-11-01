import React, {useRef, useState, useEffect} from 'react'
import {Modal, Button, Form, Col, Row, Dropdown} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'

import device from '../../store/DeviceStore'
import {getType} from '../../http/deviceAPI'

const CreateType = ({show, onHide, addItem, deleteItem}) => {
  const controlType = useRef()
  const [selectedType, setSelectedType] = useState()

  const getTypeAsync = async () => {
    const type = await getType()
    device.setType(type)
  }

  useEffect(() => {
    getTypeAsync()
  }, [show])

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить тип</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control ref={controlType} placeholder="Введите название типа" />
        </Form>
      </Modal.Body>

      <Modal.Footer className="justify-content-between">
        <Row style={{width: '60%'}}>
          <Col md={4}>
            <Dropdown>
              <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.type.map(item => (
                  <Dropdown.Item
                    key={item.id}
                    onClick={() => {
                      setSelectedType(item.name)
                    }}
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col md={4} className="text-center align-self-center">
            {selectedType}
          </Col>
          <Col md={4}>
            <Button
              disabled={!selectedType}
              variant="outline-danger"
              onClick={() => {
                deleteItem(selectedType)
                setSelectedType()
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

export default observer(CreateType)
