import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './masks.css';
import Masks from '../comps/img/mask.png'

const masks = () => {
    return (
        <>
            <div className="col-md-4 m-0 mt-5">
                <div className="card border-0 rounded-5 sales-box mt-5" style={{ width: '18rem', marginTop: '-10px' }}>
                    <img src={Masks} className="card-img-top" alt="" />
                    <div className="card-body  d-flex flex-column position-static d-flex align-items-center ">
                        <h6 className="mb-0 cs-h6 mt-2 text-black">MASKS</h6>
                        <p className="cs-p text-black">$1999 - <s> $2999</s></p>
                        <div className=" d-flex">
                            <p className="text-muted">Sold : </p>
                            <p className=" me-3">351</p>
                            <p className="text-muted ms-5">Available : </p>
                            <p>500</p>
                        </div>
                        <div className="progress w-100 mb-5">
                            <div className="progress-bar w-75" role="progressbar" aria-valuenow={351} aria-valuemin={0} aria-valuemax={500} style={{ width: '10%', backgroundColor: '#FF6B00' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default masks