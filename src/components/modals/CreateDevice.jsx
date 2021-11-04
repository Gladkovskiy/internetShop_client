import React, {useState} from 'react'
import {observer} from 'mobx-react-lite'

import {Modal, Button, Form, Dropdown, Row, Col} from 'react-bootstrap'

const CreateDevice = ({show, onHide, types, brands, addItem}) => {
  const [info, setInfo] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [file, setFile] = useState(null)
  const [selectType, setSelectType] = useState({})
  const [selectBrand, setSelectBrand] = useState({})

  const addInfo = () => {
    setInfo(prev => [...prev, {title: '', description: '', number: Date.now()}])
  }

  const deleteInfo = index => {
    setInfo(info.filter((_, i) => i !== index))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  //изменение массива состояния с объектами, возвращаем новый массив после map
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => (i.number === number ? {...i, [key]: value} : i)))
  }

  const addDevice = () => {
    //для передачи файла используем не json а formdata
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', selectBrand.id)
    formData.append('typeId', selectType.id)
    // массив нельзя передавать или json или blob
    formData.append('info', JSON.stringify(info))

    addItem(formData)
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить устройсво</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>
              {selectType.name || 'Выберите тип'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map(type => (
                <Dropdown.Item
                  key={type.id}
                  onClick={() => setSelectType(type)}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="mt-3">
            <Dropdown.Toggle>
              {selectBrand.name || 'Выберите бренд'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map(brand => (
                <Dropdown.Item
                  key={brand.id}
                  onClick={() => setSelectBrand(brand)}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            value={name}
            onChange={({target}) => setName(target.value)}
            placeholder="Введите название утсройства"
            className="mt-3"
          />

          <Form.Control
            value={price}
            onChange={({target}) => setPrice(Number(target.value))}
            type="number"
            placeholder="Введите стоимость утсройства"
            className="mt-3"
          />

          <Form.Control type="file" className="mt-3" onChange={selectFile} />
          <hr />

          <Button variant="outline-dark" onClick={addInfo}>
            Добавить свойство
          </Button>

          {info.map((info, index) => (
            <Row key={info.number} className="mt-3">
              <Col md={4}>
                <Form.Control
                  value={info.title}
                  onChange={e => {
                    changeInfo('title', e.target.value, info.number)
                  }}
                  placeholder="Введите название характеристики"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={info.description}
                  onChange={e => {
                    changeInfo('description', e.target.value, info.number)
                  }}
                  placeholder="Введите описание характеристики"
                />
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
        <Button
          variant="outline-success"
          onClick={() => {
            addDevice()
          }}
        >
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default observer(CreateDevice)
