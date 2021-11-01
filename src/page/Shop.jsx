/* eslint-disable react-hooks/exhaustive-deps */
import {observer} from 'mobx-react-lite'
import React, {useEffect} from 'react'
import {Col, Container, Row} from 'react-bootstrap'

import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import device from '../store/DeviceStore'
import {getType, getBrand, getDevice} from '../http/deviceAPI'
import Pagenat from '../components/Pagination'

const Shop = () => {
  useEffect(() => {
    const getTypeAsync = async () => {
      const type = await getType()
      device.setType(type)
    }

    const getBrandAsync = async () => {
      const brand = await getBrand()
      device.setBrand(brand)
    }

    const getDevicesAsync = async () => {
      const devices = await getDevice(null, null, device.page, device.limit)
      device.setDevices(devices.rows)
      device.setCount(devices.count)
    }
    getTypeAsync()
    getBrandAsync()
    getDevicesAsync()
  }, [])

  useEffect(() => {
    const getDevicesAsync = async () => {
      const devices = await getDevice(
        device.selectedBrand.id,
        device.selectedType.id,
        device.page,
        device.limit
      )

      device.setDevices(devices.rows)
      device.setCount(devices.count)
    }
    getDevicesAsync()
  }, [device.selectedBrand, device.selectedType, device.page])

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
      <Pagenat />
    </Container>
  )
}

export default observer(Shop)
