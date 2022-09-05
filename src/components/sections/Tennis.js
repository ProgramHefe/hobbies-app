import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tenniss from '../../images/tennis.jpg'
import Racquet from '../../images/Tennis_Racquet.jpg'
import Shoes from '../../images/tennis_shoes.jpg'

import './Tennis.css'


const Tennis = () => {

    return (
        <Container fluid>
            <div className="tennis-introduction">
                <Row>
                    <Col className="head-column">
                        <h1>Tennis</h1>
                    </Col>
                </Row>
                <Row className="tennis-intro-row">
                    <Col xs={12} sm={4} md={4}>
                        <img fluid src={Tenniss} alt="tennis"></img>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                        <p className="tennis-explanation">
                            Tennis is very nice way to get your competitive side pleasured.
                            It is nice way to get your hand-eye cordination better and stamina wise
                            too. You can play it 1v1 on 2v2.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="tennis-gear">
                <Row className="tennis-gear-row">
                    <Col >
                        <h3>
                            Tennis Gear
                        </h3>
                    </Col>
                    <Col>
                        <img fluid src={Racquet} alt="Tennis racquet"></img>
                        <p>
                            Tennis racquet is essential for this hobby. There is
                            many different type of racquets and i recommend to start
                            with beginner friendly version.
                        </p>
                    </Col>
                    <Col>
                        <img fluid src={Shoes} alt="Tennis shoes"></img>
                        <p>
                            Tennis shoes are not that important but they give you edge 
                            with better grip and suitability to court. Running shoes
                            are also valid for playing tennis.
                        </p>
                    </Col>
                </Row>
                <Row className="tennis-video-row">
                    <iframe 
                        className="tennis-video"
                        src="https://www.youtube.com/embed/YqgcykDGB2A&ab">
                
                        </iframe>
                    <p>Little video for you to get to know each type of shot.</p>
                </Row>
            </div>
        </Container>
    )
}

export default Tennis; 