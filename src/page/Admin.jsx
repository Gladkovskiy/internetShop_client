import React, {useState} from 'react'

import {Button, Container} from 'react-bootstrap'
import CreateType from '../components/modals/CreateType'
import CreateBrande from '../components/modals/CreateBrande'
import CreateDevice from '../components/modals/CreateDevice'

import useDeviceAllBrandGET from '../http/react-query/brands/useDeviceAllBrandGET'
import useDeviceAllTypeGET from '../http/react-query/types/useDeviceAllTypeGET'
import useDeviceCreateBrandPOST from '../http/react-query/brands/useDeviceCreateBrandPOST'
import useDeviceDeleteBrandePOST from '../http/react-query/brands/useDeviceDeleteBrandePOST'
import useCreateType from '../http/react-query/types/useCreateType'
import useDeleteType from '../http/react-query/types/useDeleteType'
import useCreateDevice from '../http/react-query/devices/useCreateDevice'

const Admin = () => {
  const [showType, setShowType] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showDevice, setShowDevice] = useState(false)

  const queryTypes = useDeviceAllTypeGET()
  const queryBrands = useDeviceAllBrandGET()

  const mutateCreateBrand = useDeviceCreateBrandPOST()
  const mutateDeleteBrand = useDeviceDeleteBrandePOST()

  const mutateCreateType = useCreateType()
  const mutateDeleteType = useDeleteType()

  const mutateCreateDevise = useCreateDevice()

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
        types={queryTypes.data}
        addItem={mutateCreateType.mutate}
        deleteItem={mutateDeleteType.mutate}
      />
      <CreateBrande
        show={showBrand}
        onHide={() => setShowBrand(prev => !prev)}
        brands={queryBrands.data}
        addItem={mutateCreateBrand.mutate}
        deleteItem={mutateDeleteBrand.mutate}
      />
      <CreateDevice
        types={queryTypes.data}
        brands={queryBrands.data}
        addItem={mutateCreateDevise.mutate}
        show={showDevice}
        onHide={() => setShowDevice(prev => !prev)}
      />
    </Container>
  )
}

export default Admin
