import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className="hero-section text-center py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-lg-start">
                        <p className="text-uppercase">That's right, we only sell 100% organic</p>
                    </div>
                    <div className="col-lg-4">
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faPinterest} /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +1 (234) 567 8 90</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="display-4">Welcome to our website</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn btn-primary btn-lg">See All Features</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
