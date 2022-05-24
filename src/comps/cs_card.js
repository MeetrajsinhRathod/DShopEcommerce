import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './cs_card.css';
import CS4 from '../comps/img/cs-4.png';
import Like from '../comps/img/like.svg';

const cs_card = () => {
    return (
        <>
            <div className="col mt-5">
                <div className="card c-box mt-5 rounded-5  d-flex align-content-center align-items-center" style={{ height: '90% !important', width: '80%' }}>
                    <img src={CS4} className="img-fluid " style={{ position: 'relative', marginTop: '-40px', borderRadius: '30px' }} />
                    <div className="d-flex m-0 align-self-baseline ms-4 w-75 align-content-between justify-content-between">
                        <h6 className="mb-0 cs-h6 mt-2 text-dark">Casual Shirt</h6>
                        <img className="img-fluid mt-2" src={Like} alt="" />
                    </div>
                    <div className="shirt-colors m-2  d-flex align-self-baseline ms-4">
                        <span className="black active" data-color="#7ed6df" data-pic="url(https://i.imgur.com/oRpXTOq.png)" />
                        <span className="blue" data-color="#badc58" data-pic="url(https://i.imgur.com/iyx4e9c.png)" />
                        <span className="green" data-color="#f9ca24" data-pic="url(https://i.imgur.com/kzsklN4.png)" />
                        <span className="ogreen" data-color="#ff7979" data-pic="url(https://i.imgur.com/iVJjW92.png)" />
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4">$1999 - <s> $2999</s></p>
                    <button className="btnAddToCart m-0 bg-black mb-5">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </>
    )
}

export default cs_card