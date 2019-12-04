import React from 'react'

import Left from './Left-side'
import Right from './Right-side'

function Main(params) {
  return (
    <main>
      <div className='wrapper'>
        <div className='hero'>
          <Left />
          <Right />
        </div>
      </div>
    </main>
  )
}

export default Main
