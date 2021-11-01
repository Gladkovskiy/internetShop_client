import React, {useState} from 'react'

import {Button, Container} from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrande from '../components/modals/CreateBrande'
import CreateDevice from '../components/modals/CreateDevice'
import {
  createType,
  deleteType,
  createBrand,
  deleteBrand,
} from '../http/deviceAPI'

const Admin = () => {
  const [showType, setShowType] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showDevice, setShowDevice] = useState(false)

  const addType = type => {
    createType(type)
    setShowType(prev => !prev)
  }

  const delType = type => {
    deleteType(type)
    setShowType(prev => !prev)
  }

  const addBrand = brand => {
    createBrand(brand)
    setShowBrand(prev => !prev)
  }

  const delBrand = brand => {
    deleteBrand(brand)
    setShowBrand(prev => !prev)
  }

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-2 p-2"
        onClick={() => setShowType(prev => !prev)}
      >
        Тип
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-2 p-2"
        onClick={() => setShowBrand(prev => !prev)}
      >
        Бренд
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-2 p-2"
        onClick={() => setShowDevice(prev => !prev)}
      >
        Утсройство
      </Button>
      <CreateType
        show={showType}
        onHide={() => setShowType(prev => !prev)}
        addItem={addType}
        deleteItem={delType}
      />
      <CreateBrande
        show={showBrand}
        onHide={() => setShowBrand(prev => !prev)}
        addItem={addBrand}
        deleteItem={delBrand}
      />
      <CreateDevice
        show={showDevice}
        onHide={() => setShowDevice(prev => !prev)}
      />
    </Container>
  )
}

export default Admin
