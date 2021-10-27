import {observer} from 'mobx-react-lite'
import React from 'react'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import {NavLink, useHistory} from 'react-router-dom'

import {SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE} from '../utils/consts'
import user from '../store/UserStore'

const NavBar = observer(() => {
  const history = useHistory()

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
            <Button
              variant={'outline-light'}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              className="ms-2"
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
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
