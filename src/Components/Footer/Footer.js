import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/home"><img src={logo} alt="" className='w-25'/></Link>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li className='my-2'><Link className='footer-link' to="/about">About Online Food</Link></li>
                            <li className='my-2'><Link className='footer-link' to="/blog">Read Our Blog</Link></li>
                            <li className='my-2'><Link className='footer-link' to="/register">Signup to Deliver</Link></li>
                            <li className='my-2'><Link className='footer-link' to="/map">Add Your Restaurant</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                            <li className='my-2'><Link className='footer-link' to="/about">Get help</Link></li>
                            <li className='my-2'><Link className='footer-link' to="/blog">Read FAQs</Link></li>
                            <li className='my-2'><Link className='footer-link' to="/register">View all Cities</Link></li>
                            <li className='my-2'><Link className='footer-link' to="/map">Restaurants Near Me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="col-md-6">
                        <p>Copyright <span>&copy;</span> {new Date().getFullYear()}</p>
                    </div>
                    <div className="col-md-4">
                        <Link className='footer-link ms-4' to="/about">Privacy Policy </Link>
                        <Link className='footer-link ms-4' to="/about">Terms of use </Link>
                        <Link className='footer-link ms-4' to="/about">Pricing </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;