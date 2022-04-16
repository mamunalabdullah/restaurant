/* eslint-disable no-sequences */
import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './WhyUs.css';
import image1 from '../../../images/adult-blur-blurred-background-687824.png';
import icon1 from '../../../images/icons/Group 204.png';
import image2 from '../../../images/chef-cook-food-33614.png';
import icon2 from '../../../images/icons/Group 1133.png';
import image3 from '../../../images/architecture-building-city-2047397.png';
import icon3 from '../../../images/icons/Group 245.png';


const WhyUs = () => {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-6">
                    <h1>Why you choose Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, ab dignissimos! Temporibus, recusandae laboriosam eos harum sapiente id, soluta dolores qui iusto laborum ut minima repellat quis hic!</p>
                </div>
            </div>
            <div>
                <CardGroup className='my-4'>
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                        <Card >
                                <Card.Img variant="top" src={image1} />
                                <Card.Body className='card-body'>
                                    <div className="card-icon">
                                        <img src={icon1} alt="" /> 
                                    </div>
                                    <div className="card-texts">
                                        <Card.Title>Fast Delevery</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button>See More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <Card.Img variant="top" src={image2} />
                                <Card.Body className='card-body'>
                                    <div className="card-icon">
                                    <img src={icon2} alt="" /> 
                                    </div>
                                    <div className="card-texts">
                                    <Card.Title>A Good auto Responder</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button>See More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <Card.Img variant="top" src={image3} />
                                <Card.Body className='card-body'>
                                    <div className="card-icon">
                                    <img src={icon3} alt="" /> 
                                    </div>
                                    <div className="card-texts">
                                    <Card.Title>Home Delevery</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button>See More</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </CardGroup>
            </div>
        </div>
    );
};

export default WhyUs;