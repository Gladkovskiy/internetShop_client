import React, {useState} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'

import {REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/consts'
import useLogin from '../http/react-query/useLogin'
import useRegistration from '../http/react-query/useRegistration'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  const mutateLogin = useLogin()
  const mutateRegistration = useRegistration()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = () => {
    if (isLogin) {
      mutateLogin.mutate({email, password})
    } else {
      mutateRegistration.mutate({email, password})
    }
  }

  const loading = mutateLogin.isLoading || mutateRegistration.isLoading
  const error = mutateLogin.isError || mutateRegistration.isError

  const showError = () => {
    if (error) {
      if (isLogin) {
        return (
          <span style={{color: 'red'}}>
            {mutateLogin.error.response.data.message}
          </span>
        )
      } else {
        return (
          <span style={{color: 'red'}}>
            {mutateRegistration.error.response.data.message}
          </span>
        )
      }
    }
    return null
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="text-center">{isLogin ? 'Авторизация' : 'Логин'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            placeholder="введите ваш еmail..."
            className="mt-3"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder="введите ваш пароль..."
            className="mt-2"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

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
            {showError()}
            <Button
              variant={'outline-success'}
              onClick={click}
              disabled={loading}
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
