import React from 'react';
import './WriteReview.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


const writereview = () => {

    return (
        <div>
            <Row className="titlePadding">
              <h1 className="headingStyle">Post Review for Parasite</h1>

            </Row>
            

            <Row className="align-items-center">
                <Col></Col>
                <Col xs={8} className="center">

                <div id="ratingInputDiv">
                    <h1 id="yourRating">Your Rating</h1>
                    <input type="text" id="ratingInput" placeholder="Your Rating"/>
                    <h6 id="outOf">out of 5</h6>

                </div>

                <div>
                    <h1 id="yourReview">Your Review</h1>
                </div>


                <div className="input-field col s12 customMarginX">
                    <textarea id="textarea2" class="materialize-textarea"></textarea>
                    <label for="textarea2">Write your review</label>
                </div>

                    <button className="critleButton input_img__button">Post Review</button>
                    <Nav.Link href="#About" className="navMargin">Cancel</Nav.Link>


                </Col>
                <Col></Col>
            </Row>
        
        </div>
    )

}

export default writereview;