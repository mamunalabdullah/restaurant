import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../images/logo2.png';
import path1 from '../../images/icons/Path 1.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar className='navbar py-4'>
                <Container>
                    <Link to="/home">
                        <img src={logo2} alt="" className='w-25'/>
                    </Link>
                    <Nav>
                        <Link to="/home">
                            <img src={path1} alt="" className='mt-2'/>
                        </Link>
                        <Link className='link' to="/login">Login</Link>
                        <Link className='link' to="/register">Sign up</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;