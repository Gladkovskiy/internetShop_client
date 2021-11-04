/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react-lite'
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import device from '../store/DeviceStore'

import Pagenat from '../components/Pagination'
import useDeviceAllTypeGET from '../http/react-query/types/useDeviceAllTypeGET'
import useDeviceAllBrandGET from '../http/react-query/brands/useDeviceAllBrandGET'
import useDeviceDevicesGET from '../http/react-query/devices/useDeviceDevicesGET'

const Shop = () => {
  const queryType = useDeviceAllTypeGET()
  const queryBrand = useDeviceAllBrandGET()
  const queryDevices = useDeviceDevicesGET(
    device.selectedBrand.id,
    device.selectedType.id,
    device.page,
    device.limit
  )

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar types={queryType.data} />
        </Col>
        <Col md={9}>
          <BrandBar brands={queryBrand.data} />
          <DeviceList devices={queryDevices.data.rows} />
        </Col>
      </Row>
      <Pagenat />
    </Container>
  )
}

export default observer(Shop)
