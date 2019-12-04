import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Main from './components/main'

import './scss/index.scss'

function App(params) {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
