import {observer} from 'mobx-react-lite'
import React from 'react'
import {Card, Image} from 'react-bootstrap'
import device from '../store/DeviceStore'
import rating from '../assets/star.png'
import {useHistory} from 'react-router'
import {DEVICE_ROUTE} from '../utils/consts'

const DeviceList = observer(() => {
  const history = useHistory()

  return (
    <div className="d-flex flex-wrap mt-3" style={{minHeight: '50vh'}}>
      {device.devices.map(device => (
        <Card
          onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
          key={device.id}
          className="ms-2 me-2 mt-3"
          style={{width: 200, cursor: 'pointer', border: 'none'}}
        >
          <Card.Img
            variant="top"
            src={process.env.REACT_APP_API_URL + '/' + device.img}
          />
          <div className="d-flex align-items-center justify-content-between">
            <Card.Title style={{fontSize: 14}} className="p-2 m-0">
              {device.name}
            </Card.Title>
            <div className="d-flex align-items-center">
              <div>{device.rating}</div>
              <Image src={rating} width={30} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
})

export default DeviceList
