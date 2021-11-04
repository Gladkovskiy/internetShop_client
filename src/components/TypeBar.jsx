import {observer} from 'mobx-react-lite'
import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'

import device from '../store/DeviceStore'

const TypeBar = ({types}) => {
  return (
    <ListGroup className="mt-3">
      {types.map(type => (
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
          active={device.selectedType.id === type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
      <Button
        className="mt-2"
        variant="outline-danger"
        size="sm"
        onClick={() => device.setDefaultFilters()}
      >
        Сброс всех фильтров
      </Button>
    </ListGroup>
  )
}

export default observer(TypeBar)
