import React from 'react'
import "./UserReview.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const userreview = () => {

    const red = {
        backgroundColor : "red"
    }
    const blue = {
        backgroundColor : "blue"
    }
    const btmMar = {
        marginBottom : "45px",
        borderBottom : "1px rgba(0,0,0,0.3) solid"
    }

    return (
        <div style={btmMar}>
            <Row>
                <Col xs={1}>
                <img id="profilePic" src={require('./UserAssets/profilePic.jpg')} />       
                </Col>
                <Col xs={2}>
                <h6 id="reviewUser">Noctis Lucis</h6>
                <h6 id="reviewDate">24 March, 2020</h6>
                <h6 ><span id="reviewRated">Rated</span>4.5/5</h6>
                </Col>

                <Col>
                    <p id="actualReview">“Bong Joon-ho approaches the theme of deprivation and greed with bared claws, scratching away one layer at a time to craft a shocking portrait of debasement and opportunism. In Bong Joon-ho’s flawless tragicomedy, a poor yet united family bluff their way into the lives of a wealthy Seoul household.”</p>
                </Col>
            </Row>
        </div>
    );
}

export default userreview;