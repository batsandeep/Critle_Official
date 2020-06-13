import React from 'react'
import "./PastReview.css"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const review = () => {
const leftMar = {
    marginLeft : "20px",
    marginTop : "20px"
}


    return (
        <div id="reviewDiv">
            <Row>
                <Col xs={1}>
                <img className="reviewCoverImage" src={require('./ReviewAssets2/SamplePic.jpg')}/>
                </Col>
                <Col >
                    <div style={leftMar}>
                        <h1 className="titlE" >Volition</h1>
                        <h1 className="artisT" >Christopher Nolan</h1>
                        <h4 className="ratinG">Rating</h4>
                        <h4 className="ratingNo">3.8/5</h4>

                    </div>
                    
                    
                </Col>
                <Col xs={6}></Col>
                <Col xs={2}>
                    <h6 className="datE">23 March, 2020</h6>
                </Col>
            </Row>
            
            <Row>
            <Col xs={1}></Col>
                <Col>
                <p className="reviewTitle">Review</p>
                <p className="actualReview">“This is not the first Jack Reacher book I have read so I did already knew who Jack Reacher is. Lee Child's creation is the modern day Conan. Meaning he is fully clothes, an expert on modern weapons (guns, switchblades, he could probably use a sword but does not yet), as well as unarmed combat.”</p>
                </Col>
            <Col xs={1}></Col>
            
            </Row>
                       
            
            
        </div>
    );
}

export default review;