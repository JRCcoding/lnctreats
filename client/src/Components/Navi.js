import Logo from '../Images/todd_logo.png'
import '../index.css'
import '../App.css'
import React, { useEffect, useRef, useState } from 'react'seSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Navi.css'
import { useAuth0 } from '@auth0/auth0-react'

import {
  MDBDropdown,
  MDBNavbarItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdb-react-ui-kit'
import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap'
import { logout } from '../Actions/userActions'

export default function Navi() {
  const { user, isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0()

  const [userMetadata, setUserMetadata] = useState(null)
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-dstps3q4l34f7d23.us.auth0.com'

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        })

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`


        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        const { user_metadata } = await metadataResponse.json()

        setUserMetadata(user_metadata)
      } catch (e) {
        console.log(e.message)
      }
    }

    getUserMetadata()
  }, [getAccessTokenSilently, user?.sub])

  const logoutButton = () => {
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
          <Navbar.Brand onClick={() => setExpanded(false)}>
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
        <NavbarBrand
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleButton}
          className='ms-5 clickable toggler'
          style={{ scale: '1.6', opacity: '100%' }}
        >
          🧁
        </NavbarBrand>

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {isAuthenticated ? (
              <MDBDropdown>
                {user.sub.includes('facebook') ? (
                  <MDBDropdownToggle
                    className='btn-light float-right'
                    style={{
                      height: '60px',
                      width: '60px',
                      borderRadius: '50%',
                    }}
                  >
                    <img
                      src={user.picture}
                      alt={user.name}
                      className='navlink ms-auto'
                      style={{ scale: '175%' }}
                    />
                  </MDBDropdownToggle>
                ) : (
                  <MDBDropdownToggle
                    className='btn-light float-right'
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '50%',
                    }}
                  >
                    <MDBIcon fas icon='user' />
                  </MDBDropdownToggle>
                )}

                <MDBDropdownMenu>
                  {isAuthenticated && (
                    <>
                      {userMetadata && (
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
                      )}

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
