import React from 'react'
import "./Details.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Review from "./ReviewComp/UserReview"


const details = () => {

    const center = {
        textAlign : "center"
    }
    const right = {
        textAlign : "right"
    }
    const left = {
        textAlign : "left"
    }

    return (
        <div>

            <div id="artworkDetails">
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                    <img className="reviewCoverImage" src={require('./ReviewAssets2/SamplePic.jpg')}/>
                    </Col>
                    <Col id="totalDetailsDiv" className="align-items-center">
                        <h1 id="artTitle">Parasite</h1>
                        
                        
                        <h3 id="artArtist">Bong Joon-ho</h3>
                        <p id="artDescription">Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
                        <button id="reviewButton">Review</button>

                    </Col>
                    <Col xs={1}>
                        
                    </Col>
                </Row>
            </div>


            <div id="ratingTitle">
                <Row style={center}> 
                    <Col>
                        <h6 id="ratingsReviews">Ratings and Reviews</h6>
                     </Col>                                
                </Row>
                <Row>
                    <Col style={right}>
                        <h1 className="headingRating">4.8</h1>
                        <p className="subheadingRating" >out of 5</p>
                    </Col>
                    <Col style={center}>
                        <h1 className="headingRating">231</h1>
                        <p className="subheadingRating">reviews</p>

                    </Col>
                    <Col style={left}>
                        <h1 className="headingRating">#7</h1>
                        <p className="subheadingRating">in movies</p>
                    </Col>
                </Row>
                


            </div>

            <div id="reviewS">
                <Review />
                <Review />
                <Review />
                <Review />

            </div>

        </div>
    );
}

export default details;