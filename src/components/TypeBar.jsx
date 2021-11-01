import {observer} from 'mobx-react-lite'
import React from 'react'
import {ListGroup} from 'react-bootstrap'

import device from '../store/DeviceStore'

const TypeBar = () => {
  return (
    <ListGroup className="mt-3">
      {device.type.map(type => (
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          active={device.selectedType.id === type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default observer(TypeBar)
