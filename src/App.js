import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import Routes from './routes'
import history from './services/history'

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Routes />
      </Router>
    </BrowserRouter>
  )
}

export default App
