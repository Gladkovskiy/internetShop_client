import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'

import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'
import device from '../../store/DeviceStore.js'

const CreateDevice = observer(({show, onHide}) => {
  const [info, setInfo] = useState([])

  const addInfo = () => {
    // const arr = [...info]
    // arr.push({title: '', description: '', number: Date.now()})
    // setInfo(arr)
    setInfo(prev => [...prev, {title: '', description: '', number: Date.now()}])
  }

  const deleteInfo = index => {
    // let arr = [...info]
    // arr = arr.filter((item, i) => i !== index)
    // setInfo(arr)
    setInfo(info.filter((_, i) => i !== index))
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.type.map(type => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-3">
            <Dropdown.Toggle>{'Выберите бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brand.map(brand => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            placeholder="Введите название утсройства"
            className="mt-3"
          />

          <Form.Control
            type="number"
            placeholder="Введите стоимость утсройства"
            className="mt-3"
          />

          <Form.Control type="file" className="mt-3" />
          <hr />

          <Button variant="outline-dark" onClick={addInfo}>
            Добавить свойство
          </Button>

          {info.map((info, index) => (
            <Row key={info.number} className="mt-3">
              <Col md={4}>
                <Form.Control placeholder="Введите название характеристики" />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Введите описание характеристики" />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => deleteInfo(index)}
                >
                  Удалить харкатеристику
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice
