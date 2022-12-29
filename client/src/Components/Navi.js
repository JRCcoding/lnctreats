import Logo from '../Images/webp/logo_transparent.webp'
import '../index.css'
import '../App.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { logout } from '../Actions/userActions'

export default function App() {
  const [showBasic, setShowBasic] = useState(false)
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    // <MDBNavbar
    //   expand='xl'
    //   // fixed='top'
    //   className='navi font-Lato bg-Navbar'
    // >
    //   <MDBContainer fluid>
    //     <LinkContainer to='/'>
    //       <MDBNavbarBrand>
    //         <img
    //           alt=''
    //           src={Logo}
    //           width='60'
    //           height='60'
    //           className='logo align-top'
    //         />{' '}
    //         <h6 className='d-inline navtitle font-Pacifico text-Navtitle'>
    //           Lauryn's Next-door Cottage
    //         </h6>
    //       </MDBNavbarBrand>
    //     </LinkContainer>

    //     <MDBNavbarToggler
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //       onClick={() => setShowBasic(!showBasic)}
    //       className='toggler ms-5'
    //     >
    //       <MDBIcon className='burger' fas icon='birthday-cake' />{' '}
    //     </MDBNavbarToggler>

    //     <MDBCollapse navbar show={showBasic} className='navlinks text-white'>
    //       <MDBNavbarNav className='mb-2 mb-lg-0 navlinks'>
    //         <LinkContainer to='/login'>
    //           <MDBNavbarItem link className='navlink'>
    //             Login
    //           </MDBNavbarItem>
    //         </LinkContainer>
    //         <LinkContainer to='/products'>
    //           <MDBNavbarItem link className='navlink'>
    //             Products
    //           </MDBNavbarItem>
    //         </LinkContainer>
    //         <LinkContainer to='/about'>
    //           <MDBNavbarItem link className='navlink'>
    //             About
    //           </MDBNavbarItem>
    //         </LinkContainer>
    //         <LinkContainer to='/contact'>
    //           <MDBNavbarItem link className='navlink'>
    //             Contact
    //           </MDBNavbarItem>
    //         </LinkContainer>
    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
    <Navbar
      className='bg-Navbar text-white font-Lato'
      expand='xl'
      collapseOnSelect
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
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
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          className='toggler ms-5'
        >
          <MDBIcon className='burger' fas icon='birthday-cake' />{' '}
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {/* <LinkContainer to='/cart'>
              <MDBNavbarItem link className='navlink'>
                <i className='fas fa-shopping-cart'></i> Cart
              </MDBNavbarItem>
            </LinkContainer> */}
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
