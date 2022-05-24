import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './shop_header.css';
import Shop from '../comps/img/Shop.svg';

import Dropdown from 'react-bootstrap/Dropdown'

const shop_header = () => {
  return (
    <>
      <div className="row d-flex justify-content-end mt-5">
        <div className="col-md-4 justify-content-center align-content-center align-content-center text-center mt-5">
          <img src={Shop} className="img-fluid" alt="" />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-content-center align-content-center text-center mt-5">
          <div className="row mb-2 d-flex">
            <div className="col-md-8 mt-2 d-flex justify-content-center align-content-center align-content-center text-center">
              Showing 1-12 of 36 results
            </div>
            <div className="col-md-4 d-flex justify-content-center align-content-center align-content-center text-center">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  Default Sorting
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Price - High to Low</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Price - Low to High</Dropdown.Item>
                  <Dropdown.Divider></Dropdown.Divider>
                  <Dropdown.Item href="#/action-3">Categories</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default shop_header