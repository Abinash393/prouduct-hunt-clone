import React from 'react'

function Header(params) {
  return (
    <header className='uni-box-shadow'>
      <div className='wrapper'>
        <div className='container'>
          <img
            src='images/product-hunt.svg'
            alt='product-hunt'
            className='product-hunt-img'
          />

          <div className='search-container'>
            <img src='images/search.svg' alt='search' className='search-img' />
            <input
              type='text'
              className='search-input'
              placeholder='Discover your next favorite things...'
            />
          </div>

          <nav className='links-nav'>
            <a href='#'>
              <p className='top-links'>Deals</p>
            </a>
            <a href='#'>
              <p className='top-links'>Jobs</p>
            </a>
            <a href='#'>
              <p className='top-links'>Makers</p>
            </a>
            <a href='#'>
              <p className='top-links'>Radio</p>
            </a>
            <a href='#'>
              <p className='top-links'>Ship</p>
            </a>
            <h3 className='top-links'>...</h3>
          </nav>

          <nav className='acc-nav'>
            <a href='#'>
              <span className='login-btn'>LOG IN</span>
            </a>
            <a href='#'>
              <span className='signup-btn'>SIGN UP</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
