import Logo from '../Images/logo_transparent.png'
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
            {/* <LinkContainer to='#about'>
              <MDBNavbarItem link className='navlink'>
                About
              </MDBNavbarItem>
            </LinkContainer> */}
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
      </MDBContainer>
    </MDBNavbar>

    // <>
    //   <Navbar bg='light' expand='lg'>
    //     <Container>
    //       <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //       <Navbar.Collapse id='basic-navbar-nav'>
    //         <Nav className='me-auto'>
    //           <Nav.Link href='#home'>Home</Nav.Link>
    //           <Nav.Link href='#link'>Link</Nav.Link>
    //           <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
    //             <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
    //             <NavDropdown.Item href='#action/3.2'>
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href='#action/3.3'>
    //               Something
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href='#action/3.4'>
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  )
}
