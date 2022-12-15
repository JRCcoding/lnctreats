import Logo from '../Images/logo_transparent.png'
import '../index.css'
import '../App.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit'

export default function App() {
  const [showBasic, setShowBasic] = useState(false)

  return (
    <MDBNavbar
      expand='md'
      fixed='top'
      className='navi rounded-bottom font-Lato'
    >
      <MDBContainer fluid>
        <LinkContainer to='/'>
          <MDBNavbarBrand>
            <img
              alt=''
              src={Logo}
              width='60'
              height='60'
              className='logo align-top'
            />{' '}
            <h6 className='d-inline navtitle font-Pacifico'>
              Lauryn's Next-door Cottage
            </h6>
          </MDBNavbarBrand>
        </LinkContainer>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          className='toggler ms-5'
        >
          <MDBIcon className='burger' fas icon='birthday-cake' />{' '}
        </MDBNavbarToggler>
        <div className='ms-auto'>
          <MDBCollapse navbar show={showBasic} className='navlinks'>
            <MDBNavbarNav className='mb-2 mb-lg-0 '>
              {/* <LinkContainer to='/'>
                <MDBNavbarLink>Home</MDBNavbarLink>
              </LinkContainer>
              <LinkContainer to='#about'>
                <MDBNavbarLink>About</MDBNavbarLink>
              </LinkContainer> */}
              <LinkContainer to='/'>
                <MDBNavbarItem link className='navlink'>
                  Home
                </MDBNavbarItem>
              </LinkContainer>
              <LinkContainer to='/products'>
                <MDBNavbarItem link className='navlink'>
                  Products
                </MDBNavbarItem>
              </LinkContainer>

              {/* <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href='#'
                tabIndex={-1}
                aria-disabled='true'
              >
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            </MDBNavbarNav>

            {/* <form className='d-flex input-group w-auto'>
            <input
              type='search'
              className='form-control'
              placeholder='Search'
              aria-label='Search'
            />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form> */}
          </MDBCollapse>
        </div>
      </MDBContainer>
    </MDBNavbar>
  )
}
