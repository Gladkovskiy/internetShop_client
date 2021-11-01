import React, {useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {Spinner} from 'react-bootstrap'

import AppRouter from './components/AppRouter'
import NavBar from './components/Navbar'
import user from './store/UserStore'
import {check} from './http/userAPI'

const App = observer(() => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await check()
        user.setUser(userData)
        user.setIsAuth(true)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        localStorage.removeItem('token')
        user.setIsAuth(false)
      }
    }
    checkUser()
  }, [])

  if (loading) {
    return (
      <Spinner
        animation="border"
        role="status"
        style={{position: 'absolute', left: '50%', top: '50%'}}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
