import {observer} from 'mobx-react-lite'
import React from 'react'
import {Card} from 'react-bootstrap'
import device from '../store/DeviceStore'

const BrandBar = observer(({brands}) => {
  return (
    <div className="d-flex mt-3 flex-wrap">
      {brands.map(brand => (
        <Card
          key={brand.id}
          className="p-3 ms-2 mt-2"
          onClick={() => device.setSelectedBrand(brand)}
          border={device.selectedBrand.id === brand.id ? 'danger' : 'light'}
          style={{cursor: 'pointer'}}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  )
})

export default BrandBar
