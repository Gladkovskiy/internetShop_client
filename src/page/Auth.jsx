import React, {useState} from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {NavLink, useLocation, useHistory} from 'react-router-dom'
import {observer} from 'mobx-react-lite'

import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts'
import {registration, login} from '../http/userAPI'
import user from '../store/UserStore'

const Auth = observer(() => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const click = async () => {
    try {
      let userData
      if (isLogin) {
        userData = await login(email, password)
      } else {
        userData = await registration(email, password)
      }
      setCheckPassword('')
      user.setUser(userData)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch (e) {
      setCheckPassword(e.response.data.message)
    }
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
            <span style={{color: 'red'}}>
              {checkPassword.length !== 0 ? checkPassword : null}
            </span>
            <Button variant={'outline-success'} onClick={click}>
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth
