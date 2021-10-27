import React, {useState} from 'react'

import {Button, Container} from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrande from '../components/modals/CreateBrande'
import CreateDevice from '../components/modals/CreateDevice'

const Admin = () => {
  const [showType, setShowType] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showDevice, setShowDevice] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-2 p-2"
        onClick={() => setShowType(prev => !prev)}
      >
        Добавить тип
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-2 p-2"
        onClick={() => setShowBrand(prev => !prev)}
      >
        Добвить бренд
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-2 p-2"
        onClick={() => setShowDevice(prev => !prev)}
      >
        Добавить утсройство
      </Button>
      <CreateType show={showType} onHide={() => setShowType(prev => !prev)} />
      <CreateBrande
        show={showBrand}
        onHide={() => setShowBrand(prev => !prev)}
      />
      <CreateDevice
        show={showDevice}
        onHide={() => setShowDevice(prev => !prev)}
      />
    </Container>
  )
}

export default Admin
