import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faAngleDown} from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'
import './MobileNavbar.css'
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button'
import { IoCloseSharp } from "react-icons/io5";

function MobileNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex mobile-nav  ' style={{backgroundColor:'black'}}>
      <FontAwesomeIcon icon={faBars} onClick={handleShow} className='three-bars' />
      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:'black',color:'white'}}>
        <Offcanvas.Header    >
          <Offcanvas.Title>Home</Offcanvas.Title>
          <IoCloseSharp onClick={handleClose} className="custom-offcanvas-header"  />
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Sell Your Music</Nav.Link>
      <Accordion className='nav-accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><Nav.Link eventKey="link-1">Services <FontAwesomeIcon icon={faAngleDown} id='angle-down' /> </Nav.Link>
    </Accordion.Header>
        <Accordion.Body>
        <Nav.Link eventKey="link-2">Rights Management</Nav.Link>
      <Nav.Link eventKey="link-2">Youtube Monetization</Nav.Link>
      <Nav.Link eventKey="link-2">Music Publishing</Nav.Link>
      <Nav.Link eventKey="link-2">Digital Distribution</Nav.Link>
      <Nav.Link eventKey="link-2">Our Technologies For Labels/Artists</Nav.Link>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Nav.Link eventKey="link-2">Pricing</Nav.Link>
      <Nav.Link eventKey="link-2">Music Distribution</Nav.Link>
      <Nav.Link eventKey="link-2">About US</Nav.Link>
      <Nav.Link eventKey="link-2">Login</Nav.Link>
    </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <img src={logo} alt="logo"  id='mobile-nav-logo'/>
      </div>
    </>
  );
}

export default MobileNavbar;