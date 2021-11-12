import {observer} from 'mobx-react-lite'
import React from 'react'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import {NavLink, useHistory} from 'react-router-dom'

import {
  SHOP_ROUTE,
  LOGIN_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
} from '../utils/consts'
import user from '../store/UserStore'
import useBasketDevicesGET from '../http/react-query/basket/useBasketDevicesGET'

const NavBar = observer(() => {
  const history = useHistory()

  useBasketDevicesGET(user.user.basket)

  const logOut = () => {
    user.setUser('')
    user.setIsAuth(false)
    localStorage.removeItem('token')
    history.push(SHOP_ROUTE)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{color: 'white', textDecoration: 'none'}}
          to={SHOP_ROUTE}
        >
          Internet Shop
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} disabled className="me-2">
              {user.user.email}
            </Button>
            <Button
              className="ms-2 me-2"
              variant={'outline-light'}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(BASKET_ROUTE)}
            >
              Корзина {user.basketCountDevices}
            </Button>
            <Button className="ms-2" variant={'outline-light'} onClick={logOut}>
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{color: 'white'}}>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              {' '}
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
