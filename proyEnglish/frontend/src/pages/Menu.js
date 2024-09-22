import React from 'react'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu() {
  return (
    <div>
      <Navbar bg='light' expanded='lg'>
        <Container>
          <Navbar.Brand href='#home'>Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#about'>Acerca de </Nav.Link>
              <NavDropdown title='Clases' id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to="/lesson01">Leccion 1</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu