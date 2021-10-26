import {observer} from 'mobx-react-lite'
import React from 'react'
import {Container, Navbar, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import {SHOP_ROUTE} from '../utils/consts'
import user from '../store/UserStore'

const NavBar = observer(() => {
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
            <Button variant={'outline-light'}>Админ панель</Button>
            <Button
              className="ms-2"
              variant={'outline-light'}
              onClick={() => user.setIsAuth(false)}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{color: 'white'}}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
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
