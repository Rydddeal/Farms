// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-solid-svg-icons';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import farm5 from '../Assests/crop.jpg';
// import farm6 from '../Assests/highland-cow-1575005.jpg';
// import farm7 from '../Assests/wheat-2391348.jpg'
// // import crop from '../Assests/crop.jpg'

// const Hero = () => {
//     return (
//         <div className="hero-section text-center py-5">
//             <div className="container">
//                 <div id="carouselInterval" className="carousel slide" data-bs-ride="carousel">
//                     <div className="carousel-inner">
//                         <div className="carousel-item" data-bs-interval="5000">
//                             <img src={farm5} className="d-block w-100" alt="slide 1" />
//                             <p className="text-uppercase">That's right, we only sell 100% organic</p>
//                         </div>
//                         <div className="carousel-item" data-bs-interval="5000">
//                             <img src={farm6} className="d-block w-100" alt="slide 2" />
//                             <p><FontAwesomeIcon icon={faPhoneAlt} /> +1 (234) 567 8 90</p>
//                         </div>
//                         <div className="carousel-item" data-bs-interval="5000">
//                             <img src={farm7} className="d-block w-100" alt="slide 3" />
//                         </div>
//                     </div>
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouseIInterval" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselInterval" data-bs-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-4 text-lg-start">
                        
//                     </div>
//                     <div className="col-lg-4">
                       
//                     </div>
//                     <div className="col-lg-4 text-lg-end">
                        
//                     </div>
//                 </div>
//                 <div className="row mt-5">
//                     <div className="col">
//                         <h1 className="display-4">Welcome to our website</h1>
//                         <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                         <button className="btn btn-primary btn-lg">See All Features</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;


import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css';

const Hero = () => {
    return (
        <div className="bg-secondary">
            <Carousel className='hero-carousel'>
                <Carousel.Item className='hero-item bg-danger'>
                    <Carousel.Caption>
                        <h3>Best Farm produce</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdumdf.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='hero-item bg-danger'>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <Carousel.Caption>
                        <h3>Maximizing Crop Yields</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='hero-item bg-danger'>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hero;

