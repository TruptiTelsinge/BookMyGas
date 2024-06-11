import { Link } from 'react-router-dom'
import cylinderLogo from '../assets/cylinder_logo.png'
import { useEffect } from 'react'

function Navbar () {

  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary bg-dark'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img src={ cylinderLogo } alt="Cylinder Logo" />
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                to='/home'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/connection'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Connection
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/booking'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-link'
                aria-current='page'
                href='#'
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
