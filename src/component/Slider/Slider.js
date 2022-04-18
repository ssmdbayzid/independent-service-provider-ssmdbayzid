import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../images/banner/p1.jpg'
import img2 from '../images/banner/p2.jpg'
import img3 from '../images/banner/p3.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img 

                        className="d-block"
                        style={{height: '400px', width: '100%'}}
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className=" d-block"
                        style={{height: '400px', width: '100%'}}
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{height: '400px', width: '100%'}}
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;