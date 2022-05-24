import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './carousel1.css';
import Item1 from '../comps/img/PngItem_1.svg';
import Prev from '../comps/img/<.svg';
import Next from '../comps/img/>.svg';

import { Carousel } from 'react-bootstrap';



const carousel1 = () => {
    return (
        <>
            <Carousel className='mt-5 position-relative' prevIcon={<div className='me-md-5 me-s-1'><img src={Prev} className="img-fluid me-md-5 me-s-1" alt="" /></div>} nextIcon={<div className='ms-md-5 ms-s-0'><img src={Next} className="img-fluid ms-md-5 ms-s-0" alt="" /></div>}>
                <Carousel.Item interval={2000} className=' ms-5 pe-5'>
                    <div className="row mb-2 d-flex flex-row justify-content-center">
                        <div className="col-md-5 flex-column d-flex">
                            <h1 className="mb-0 hero-h1">Get 50% <br /> Offer Now!!</h1>
                            <p className="hero-p">One year pieces to pieces guarantee, if you are
                                <br />not satisfy 100% money back guarantee.</p>
                            <button className="btnBN">
                                BUY NOW!
                            </button>
                        </div>
                        <div className="col-md-6 d-flex flex-column order-md-1 hero-img justify-content-center pe-5">
                            <img src={Item1} className="img-fluid hero-img" alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000} className=' ms-5 pe-5'>
                    <div className="row mb-2 d-flex flex-row justify-content-center">
                        <div className="col-md-5 flex-column">
                            <h1 className="mb-0 hero-h1">Get 50% <br /> Offer Now!!</h1>
                            <p className="hero-p">One year pieces to pieces guarantee, if you are
                                <br />not satisfy 100% money back guarantee.</p>
                            <button className="btnBN">
                                BUY NOW!
                            </button>
                        </div>
                        <div className="col-md-6 d-flex flex-column order-md-1 hero-img justify-content-center pe-5">
                            <img src={Item1} className="img-fluid hero-img" alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000} className=' ms-5 pe-5'>
                    <div className="row mb-2 d-flex flex-row justify-content-center">
                        <div className="col-md-5 flex-column">
                            <h1 className="mb-0 hero-h1">Get 50% <br /> Offer Now!!</h1>
                            <p className="hero-p">One year pieces to pieces guarantee, if you are
                                <br />not satisfy 100% money back guarantee.</p>
                            <button className="btnBN">
                                BUY NOW!
                            </button>
                        </div>
                        <div className="col-md-6 d-flex flex-column order-md-1 hero-img justify-content-center pe-5">
                            <img src={Item1} className="img-fluid hero-img" alt="" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel >
        </>
    )
}

export default carousel1
