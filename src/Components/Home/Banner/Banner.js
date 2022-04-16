import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner'>
            <div className="banner-contents">
            <h1>Best Food waiting for your belly</h1>
            <div className="d-flex search">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;