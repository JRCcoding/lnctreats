import Container from 'react-bootstrap/Container'
import Logo from '../Images/logo_transparent.png'
import { Navbar, Nav } from 'react-bootstrap'

function Navi() {
  return (
    <>
      <Navbar className='navi' variant='light' fixed='top'>
        <Container>
          <Navbar.Brand href='#intro'>
            <img
              alt=''
              src={Logo}
              width='60'
              height='60'
              className='d-inline-block align-top'
            />{' '}
            <h2 className='d-inline justify-content-center'>
              Lauryn's Next-door Cottage
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto navlinks'>
              <Nav.Link href='#intro'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navi
