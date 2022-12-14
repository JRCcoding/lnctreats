import Logo from '../Images/logo_transparent.png'
import '../index.css'
import '../App.css'
import React, { useState } from 'react'
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
    <MDBNavbar expand='md' fixed='top' className='navi rounded-bottom'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img
            alt=''
            src={Logo}
            width='60'
            height='60'
            className='logo align-top'
          />{' '}
          <h6 className='d-inline navtitle font-LaBelle'>
            Lauryn's Next-door Cottage
          </h6>
        </MDBNavbarBrand>

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
              <MDBNavbarItem>
                <MDBNavbarLink
                  className='navlink'
                  active
                  aria-current='page'
                  href='#'
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='navlink' href='#about'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag='a'
                    className='nav-link navlinks'
                    role='button'
                  >
                    Products and More
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href='#products'>
                      Products
                    </MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

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
