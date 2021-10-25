import React from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="text-center">{isLogin ? 'Авторизация' : 'Логин'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="введите ваш еmail..." className="mt-3" />
          <Form.Control placeholder="введите ваш пароль..." className="mt-2" />
          <div className="d-flex justify-content-between mt-2 flex-row align-items-center">
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE} exact>
                  Зарегистрируйся!
                </NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?{' '}
                <NavLink to={LOGIN_ROUTE} exact>
                  Авторизируйся!
                </NavLink>
              </div>
            )}
            <Button variant={'outline-success'}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
