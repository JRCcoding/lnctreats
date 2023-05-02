// import Logo from '../Images/webp/logo_transparent.webp'
import Logo from '../Images/todd_logo.png'
import '../index.css'
import '../App.css'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Navi.css'

import {
  MDBDropdown,
  MDBIcon,
  MDBNavbarItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../Actions/userActions'

export default function App() {
  const [showBasic, setShowBasic] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const toggleButton = () => {
    setShowBasic(!showBasic)
    setExpanded(expanded ? false : 'expanded')
  }
  const navMenu = useRef()
  const closeOpenMenus = (e) => {
    if (navMenu.current && setExpanded && !navMenu.current.contains(e.target)) {
      setExpanded(false)
    }
  }
  document.addEventListener('mousedown', closeOpenMenus)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Navbar
      className='bg-Navbar text-white font-Lato'
      expand='xl'
      expanded={expanded}
      ref={navMenu}
      collapseOnSelect
      fixed='top'
    >
      <Container>
        <LinkContainer to='/' onClick={() => setExpanded(false)}>
          <Navbar.Brand>
            <img
              alt=''
              src={Logo}
              width='60'
              height='60'
              className='logo align-top'
              style={{ borderRadius: '50%', marginRight: '5%' }}
            />{' '}
            <h6 className='d-inline navtitle font-Pacifico text-Navtitle'>
              Lauryn's Next-door Cottage
            </h6>
          </Navbar.Brand>
        </LinkContainer>
        <div
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleButton}
          className='ms-5 clickable'
          style={{ scale: '2' }}
        >
          {/* <MDBIcon className='burger' fas icon='birthday-cake' />{' '} */}
          🧁
        </div>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {userInfo ? (
              <MDBDropdown
                id='username'
                className='navlink user_nav'
                onClick={() => setExpanded(expanded ? false : 'expanded')}
              >
                <MDBDropdownToggle className='btn-light'>
                  {userInfo.name}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <LinkContainer
                    to='/profile'
                    onClick={() => setExpanded(expanded ? false : 'expanded')}
                  >
                    <MDBDropdownItem className='font-thin mx-3'>
                      Profile
                    </MDBDropdownItem>
                  </LinkContainer>
                  <MDBDropdownItem
                    onClick={logoutHandler}
                    className='font-thin mx-3'
                  >
                    Logout
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <LinkContainer
                to='/login'
                onClick={() => setExpanded(expanded ? false : 'expanded')}
              >
                <MDBNavbarItem className='navlink '>
                  <i className='fas fa-user'></i> Sign In
                </MDBNavbarItem>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              // <NavDropdown title='Admin' id='adminmenu' className='navlink'>
              //   <LinkContainer to='/admin/userlist'>
              //     <MDBDropdownItem>Users</MDBDropdownItem>
              //   </LinkContainer>
              //   <LinkContainer to='/admin/productlist'>
              //     <MDBDropdownItem>Products</MDBDropdownItem>
              //   </LinkContainer>
              <LinkContainer
                to='/admin/orderlist'
                onClick={() => setExpanded(expanded ? false : 'expanded')}
              >
                <MDBNavbarItem className='navlink' style={{ width: '150px' }}>
                  Orders/Requests
                </MDBNavbarItem>
              </LinkContainer>

              // </NavDropdown>
            )}
            <LinkContainer
              to='/cart'
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
              <MDBNavbarItem link className='navlink'>
                <i className='fas fa-shopping-cart'></i> Cart
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer
              to='/products'
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
              <MDBNavbarItem link className='navlink clickable'>
                Products
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer
              to='/about'
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
              <MDBNavbarItem link className='navlink'>
                About
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer
              to='/contact'
              onClick={() => setExpanded(expanded ? false : 'expanded')}
            >
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
