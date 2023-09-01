import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <div className='nav-bar'>
       <Navbar bg="" expand="lg" className=''>
      <Container className=''>
      <Link className='text-white text-decoration-none' to='/'><h3>Christiana.</h3></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll " className='justify-content-end'>
          <Nav
            className="gap-4 "
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-decoration-none text-white  list ' to='/Projects'>Projects</Link>
            <Link className='text-decoration-none text-white  list ' to='/DownloadResume'>Download Resume</Link>
            <Link className='text-decoration-none text-white  list' to='/Contact'> Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars