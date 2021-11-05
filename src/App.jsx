import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import {Spinner} from 'react-bootstrap'

import AppRouter from './components/AppRouter'
import NavBar from './components/Navbar'
import useChekAuth from './http/react-query/useChekAuth'

const App = observer(() => {
  const queryCheckAuth = useChekAuth()
  if (queryCheckAuth.isLoading) {
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
