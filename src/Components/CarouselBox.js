import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="book"
                     />
                     <Carousel.Caption>
                        <h3>Book image</h3>
                        <p> Some test for book app.</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="book"
                     />
                     <Carousel.Caption>
                        <h3>Book image</h3>
                        <p> Some test for book app.</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="book"
                     />
                     <Carousel.Caption>
                        <h3>Book image</h3>
                        <p> Some test for book app.</p>
                     </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="book"
                     />
                     <Carousel.Caption>
                        <h3>Book image</h3>
                        <p> Some test for book app.</p>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}