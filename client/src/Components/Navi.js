import Logo from '../Images/webp/logo_transparent.webp'
import '../index.css'
import '../App.css'
import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Navi.css'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from 'mdb-react-ui-kit'

export default function App() {
  const [showBasic, setShowBasic] = useState(false)

  return (
    <MDBNavbar
      expand='xl'
      // fixed='top'
      className='navi font-Lato bg-Navbar'
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
            <h6 className='d-inline navtitle font-Pacifico text-Navtitle'>
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

        <MDBCollapse navbar show={showBasic} className='navlinks text-white'>
          <MDBNavbarNav className='mb-2 mb-lg-0 navlinks'>
            <LinkContainer to='/products'>
              <MDBNavbarItem link className='navlink'>
                Products
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer to='/about'>
              <MDBNavbarItem link className='navlink'>
                About
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <MDBNavbarItem link className='navlink'>
                Contact
              </MDBNavbarItem>
            </LinkContainer>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}
