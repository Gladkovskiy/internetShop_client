import React from 'react'
import {Pagination} from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import devices from '../store/DeviceStore'

const Paginat = () => {
  let pages = Math.ceil(devices.devicesCount / devices.limit)
  pages = Array(pages).fill('')

  return (
    <Pagination className="d-flex justify-content-center mt-5">
      <Pagination.First onClick={() => devices.setPage(1)} />
      <Pagination.Prev
        onClick={() =>
          devices.setPage(devices.page !== 1 ? devices.page - 1 : devices.page)
        }
      />
      {pages.map((_, index) => (
        <Pagination.Item
          key={index}
          onClick={() => devices.setPage(index + 1)}
          active={index + 1 === devices.page}
        >
          {index + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          devices.setPage(
            devices.page !== pages.length ? devices.page + 1 : devices.page
          )
        }
      />
      <Pagination.Last onClick={() => devices.setPage(pages.length)} />
    </Pagination>
  )
}

export default observer(Paginat)
