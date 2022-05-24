import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './carousel1.css';
import Featured from '../comps/img/featured.svg';
import CS1 from '../comps/img/cs-1.png';
import CS2 from '../comps/img/cs-2.png';
import CS3 from '../comps/img/cs-3.png';
import Prev2 from '../comps/img/<1.svg';
import Next2 from '../comps/img/>1.svg';
import LikeColor from '../comps/img/likeColor.svg';

import { Carousel } from 'react-bootstrap';

import './carousel2.css';

const carousel2 = () => {
    return (
        <>
            <div className="col-md-8 mt-5">
                <div className="row mb-2 mt-5">
                    <div className="col-md-10 col-sm-3">
                        <img src={Featured} className="img-fluid mt-3" alt="" />
                    </div>
                    <div className="col-md-2 col-sm-1 d-flex">
                        <a href="#multi-item-example" className="m-0" role="button" data-slide="prev">
                            <img src={Prev2} alt="" />
                        </a>
                        <a href="##multi-item-example" style={{ marginLeft: '-35px' }} role="button" data-slide="next">
                            <img src={Next2} alt="" />
                        </a>
                    </div>
                </div>
                <Carousel className='mt-4 carousel-2 d-flex' controls={false} indicators={false}>

                    <Carousel.Item interval={2000} className='m-3'>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2 align-items-center bg-transparent border-0">
                                    <div className="d-flex">
                                        <img src={CS1} className="img-fluid" alt="" />
                                    </div>
                                    <div className="d-flex">
                                        <img src={LikeColor} alt="" style={{ marginTop: '-50px', paddingLeft: '180px' }} />
                                    </div>
                                    <h6 className="mb-0 cs-h6 mt-2">Casual Shirt</h6>
                                    <p className="cs-p d-flex">$1999 - <s> $2999</s></p>
                                    <button className="btnAddToCart m-0">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 align-items-center bg-transparent border-0">
                                    <div>
                                        <img src={CS2} className="img-fluid" alt="" />
                                    </div>
                                    <div className="d-flex">
                                        <img src={LikeColor} alt="" style={{ marginTop: '-50px', paddingLeft: '180px' }} />
                                    </div>
                                    <h6 className="mb-0 cs-h6 mt-2">Casual Shirt</h6>
                                    <p className="cs-p d-flex">$1999 - <s> $2999</s></p>
                                    <button className="btnAddToCart m-0">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 align-items-center bg-transparent border-0">
                                    <div>
                                        <img src={CS3} className="img-fluid" alt="" />
                                    </div>
                                    <div className="d-flex">
                                        <img src={LikeColor} alt="" style={{ marginTop: '-50px', paddingLeft: '180px' }} />
                                    </div>
                                    <h6 className="mb-0 cs-h6 mt-2">Casual Shirt</h6>
                                    <p className="cs-p d-flex">$1999 - <s> $2999</s></p>
                                    <button className="btnAddToCart m-0">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={2000} className='m-3'>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-2 align-items-center bg-transparent border-0">
                                    <div className="d-flex">
                                        <img src={CS2} className="img-fluid" alt="" />
                                    </div>
                                    <div className="d-flex">
                                        <img src={LikeColor} alt="" style={{ marginTop: '-50px', paddingLeft: '180px' }} />
                                    </div>
                                    <h6 className="mb-0 cs-h6 mt-2">Casual Shirt</h6>
                                    <p className="cs-p d-flex">$1999 - <s> $2999</s></p>
                                    <button className="btnAddToCart m-0">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 align-items-center bg-transparent border-0">
                                    <div>
                                        <img src={CS3} className="img-fluid" alt="" />
                                    </div>
                                    <div className="d-flex">
                                        <img src={LikeColor} alt="" style={{ marginTop: '-50px', paddingLeft: '180px' }} />
                                    </div>
                                    <h6 className="mb-0 cs-h6 mt-2">Casual Shirt</h6>
                                    <p className="cs-p d-flex">$1999 - <s> $2999</s></p>
                                    <button className="btnAddToCart m-0">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 clearfix d-none d-md-block">
                                <div className="card mb-2 align-items-center bg-transparent border-0">
                                    <div>
                                        <img src={CS1} className="img-fluid" alt="" />
                                    </div>
                                    <div className="d-flex">
                                        <img src={LikeColor} alt="" style={{ marginTop: '-50px', paddingLeft: '180px' }} />
                                    </div>
                                    <h6 className="mb-0 cs-h6 mt-2">Casual Shirt</h6>
                                    <p className="cs-p d-flex">$1999 - <s> $2999</s></p>
                                    <button className="btnAddToCart m-0">
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default carousel2