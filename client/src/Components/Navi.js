// import Logo from '../Images/webp/logo_transparent.webp'
import Logo from '../Images/todd_logo.png'
import '../index.css'
import '../App.css'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Navi.css'
import { useAuth0 } from '@auth0/auth0-react'

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

export default function Navi() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()

  const logoutButton = ({ location }) => {
    logout({
      logoutParams: { returnTo: window.location.origin },
    })
    window.location.reload(false)
  }

  const [expanded, setExpanded] = useState(false)
  const [showBasic, setShowBasic] = useState(false)
  const toggleButton = () => {
    setShowBasic(!showBasic)
    setExpanded(expanded ? false : 'expanded')
  }
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const navMenu = useRef()
  const closeOpenMenus = (e) => {
    if (navMenu.current && setExpanded && !navMenu.current.contains(e.target)) {
      setExpanded(false)
    }
  }
  document.addEventListener('mousedown', closeOpenMenus)
  return (
    <Navbar
      className='bg-Navbar text-white font-Lato'
      expand='xl'
      expanded={expanded}
      collapseOnSelect
      fixed='top'
      ref={navMenu}
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
              style={{ borderRadius: '50%', marginRight: '5%' }}
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
          onClick={toggleButton}
          // onClick={() => setExpanded(expanded ? false : "expanded")}
          className='ms-5'
        >
          {/* <MDBIcon className='burger' fas icon='birthday-cake' />{' '} */}
          🧁
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {isAuthenticated ? (
              <MDBDropdown>
                <MDBDropdownToggle
                  className='btn-light float-right'
                  style={{ height: '70px', width: '70px', borderRadius: '50%' }}
                >
                  <img
                    src={user.picture}
                    alt={user.name}
                    className='navlink ms-auto'
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {isAuthenticated && (
                    <>
                      <LinkContainer
                        to='/admin/orderlist'
                        onClick={() =>
                          setExpanded(expanded ? false : 'expanded')
                        }
                      >
                        <MDBDropdownItem
                          className='font-thin mx-3 clickable'
                          style={{ width: '150px' }}
                          onClick={() =>
                            setExpanded(expanded ? false : 'expanded')
                          }
                        >
                          Orders
                        </MDBDropdownItem>
                      </LinkContainer>
                      <LinkContainer to='/profile'>
                        <MDBDropdownItem
                          className='font-thin mx-3 clickable'
                          style={{ width: '150px' }}
                          onClick={() =>
                            setExpanded(expanded ? false : 'expanded')
                          }
                        >
                          Profile
                        </MDBDropdownItem>
                      </LinkContainer>
                      <MDBDropdownItem className='' style={{ width: '150px' }}>
                        <strong
                          onClick={logoutButton}
                          className='font-thin mx-3 clickable'
                        >
                          Sign Out
                        </strong>
                      </MDBDropdownItem>
                    </>
                  )}
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              // <MDBDropdown id='username' className='navlink user_nav'>
              //   <MDBDropdownToggle className='btn-light'>
              //     {userInfo.name}
              //   </MDBDropdownToggle>
              //   <MDBDropdownMenu>
              //     {userInfo.isAdmin && (
              //       <LinkContainer
              //         to='/admin/orderlist'
              //         onClick={() => setExpanded(expanded ? false : 'expanded')}
              //       >
              //         <MDBDropdownItem
              //           className='font-thin mx-3'
              //           style={{ width: '150px' }}
              //         >
              //           Orders/Requests
              //         </MDBDropdownItem>
              //       </LinkContainer>
              //     )}

              //     <LinkContainer
              //       to='/profile'
              //       onClick={() => setExpanded(expanded ? false : 'expanded')}
              //     >
              //       <MDBDropdownItem className='font-thin mx-3'>
              //         Profile
              //       </MDBDropdownItem>
              //     </LinkContainer>
              //     <MDBDropdownItem
              //       onClick={logoutHandler}
              //       className='font-thin mx-3'
              //     >
              //       Logout
              //     </MDBDropdownItem>
              //   </MDBDropdownMenu>
              // </MDBDropdown>
              // <LinkContainer
              //   to='/login'
              //   onClick={() => setExpanded(expanded ? false : 'expanded')}
              // >
              //   <MDBNavbarItem className='navlink '>
              //     <i className='fas fa-user'></i> Sign In
              //   </MDBNavbarItem>
              // </LinkContainer>
              <button onClick={() => loginWithRedirect()} className='navlink'>
                <i className='fas fa-user'></i> Sign In
              </button>
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
