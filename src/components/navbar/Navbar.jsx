import React from 'react';
import './navbar.css';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export default function navbar() {

  return (
    <Navbar bg="transparent" expand="lg" className='navbar'>
      <Container>


        <Navbar.Brand href="/" className='navbar-brand'>Manav Mehta</Navbar.Brand>


        <Navbar.Toggle icon={faBarsStaggered} className="nav-toggle" aria-controls="offcanvasNavbar" aria-label='Toggle navigation'> 
          <FontAwesomeIcon icon={faBarsStaggered} className="nav-toggle-icon"/>
        </Navbar.Toggle>

        <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton className='offcanvas-header'>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="offcanvas-body">
        <Nav className="justify-content-end flex-grow-1 pe-3 offcanvas-link-holder" style={{"margin-top": "25%", "margin-left": "10%"}}>
          <Nav.Link href="#action2" className='offcanvas-link'> <span className='number-link'>01</span> Home</Nav.Link>
          <Nav.Link href="#action2" className='offcanvas-link'> <span className='number-link'>02</span> Projects</Nav.Link>
          <Nav.Link href="#action2" className='offcanvas-link'><span className='number-link'>03</span> Journey</Nav.Link>
          <Nav.Link href="#action2" className='offcanvas-link'> <span className='number-link'>04</span> Contacts</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>


        <Navbar className='collapseMobile'>
          <Nav className="ms-auto">
            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="/work" className='nav-link'>Projects</Nav.Link>
            <Nav.Link href="/journey" className='nav-link'>Journey</Nav.Link>
            <Nav.Link href="/contact" className='nav-link'>Contact</Nav.Link>
          </Nav>
        </Navbar>


      </Container>
    </Navbar>
  );
}
