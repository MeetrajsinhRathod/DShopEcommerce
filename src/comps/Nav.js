import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';
import logo from '../comps/img/logo.svg';
import searchSmall from '../comps/img/search_small.svg';
import Upline from '../comps/img/|.svg';
import shoppingBag from '../comps/img/shopping-bag.svg';
import cartBadge from '../comps/img/cart_badge.svg';
import profileIcon from '../comps/img/profile_icon.svg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import { Button } from 'react-bootstrap';

const Navv = () => {
  return (
    <>
      <Navbar bg='transparent' expand="lg" className="mt-2">
          <Container fluid>
            <div className="row mb-2 flex-row ms-5 me-5 w-100">
              <div className="col-md-5 flex-column justify-content-center align-self-center">
                <div className='d-flex w-100'>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <div className='d-flex ps-5 ms-5 d-sm-block d-md-none'>
                      <NavDropdown id="navbarScrollingDropdown" title={<img src={profileIcon} className="ms-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" alt="" />}>
                        <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action7">
                          Log Out
                        </NavDropdown.Item>
                      </NavDropdown>
                      </div>
                      </div>
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0 navLink position-absolute d-flex w-75"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <li className='nav-item active bg-light'><Nav.Link href="#action1">HOME</Nav.Link></li>
                    <li className='nav-item bg-light'><Nav.Link href="#action2">PRODUCT</Nav.Link></li>
                    <li className='nav-item bg-light'><Nav.Link href="#action3">CONTACT US</Nav.Link></li>
                    <li className='nav-item bg-light'><Nav.Link href="#action4">ABOUT US</Nav.Link></li>
                    
                  </Nav>
                </Navbar.Collapse>
              </div>
              <div className="col-md-2 flex-column justify-content-center text-center align-self-center">
                <Navbar.Brand href="#"> <img src={logo} className="img-fluid" alt="" /></Navbar.Brand>
              </div>

              <div className="col-md-5 flex-column justify-content-center align-self-center">
                <div className="row mb-2 d-flex flex-row justify-content-center">
                  <div className="col-md-6 flex-column justify-content-center align-self-center">
                    <Form className="d-flex form-control bg-white border-0 rounded-pill nav-item">

                      <img src={searchSmall} className="img-fluid ms-2 mt-2" alt="" />
                      <FormControl
                        type="search"
                        className="ms-2 me-2 border-0"
                        aria-label="Search"
                      />
                      <img src={Upline} className="d-flex" alt="" />
                      <img src={shoppingBag} className="d-flex ms-2 img-fluid" alt="" />
                      <img src={cartBadge} className="d-flex mb-3 img-fluid" alt="" />
                    </Form>
                  </div>

                  <div className="col-md-6 flex-column justify-content-center align-self-center text-center ">
                  <div className="user_profile d-flex ms-5 d-none d-sm-none d-md-block">
                    <li className="nav-item dropdown d-flex ">
                      <span className="ms-5  me-3 align-self-center ">Meetraj</span>
                      <div className='d-flex'>
                      <NavDropdown id="navbarScrollingDropdown" title={<img src={profileIcon} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" alt="" />}>
                        <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action6">Settings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action7">
                          Log Out
                        </NavDropdown.Item>
                      </NavDropdown>
                      </div>
                    </li>
                  </div>
                </div>
                </div>
              </div>
            </div>

          </Container>
        </Navbar>
    </>
  )
}

export default Navv