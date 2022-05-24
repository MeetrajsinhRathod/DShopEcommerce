import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';
import Logo from '../comps/img/logo.svg';
import Enter from '../comps/img/enter.svg';


const footer = () => {
    return (
        <>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top border-dark">
                <div className="col-md-4">
                    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    </a><a className="navbar-brand me-5" href="#">
                        <img src={Logo} className="img-fluid" alt="" />
                    </a>
                </div>
                <div className="col-md-2 mb-2 mt-4 ">
                    <h5>COMPANY</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Delivery</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Collection</a>
                        </li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Returns</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Account</a></li>
                    </ul>
                </div>
                <div className="col-md-2 mb-2 mt-4">
                    <h5>FOLLOW</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pintrest</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Youtube</a></li>
                    </ul>
                </div>
                <div className="col-md-3 offset-md-1 mb-3 mt-3">
                    <form className=" form-control bg-transparent border-0 rounded-0 p-0" role="search">
                        <h5>Get 15 % off on your first order
                            By subscribing</h5>
                        <div className="d-flex bg-white search-form rounded-0 mt-3">
                            <input className="border-0 border-bottom" type="email" placeholder="Email" aria-label="Email" />
                            <img src={Enter} className="d-flex ms-2 img-fluid" alt="" />
                        </div>
                    </form>
                </div>
            </footer>
        </>
    )
}

export default footer