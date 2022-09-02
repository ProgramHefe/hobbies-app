import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bike from '../../images/Bike.jpg'
import MyBike from '../../images/marlin7.jpg'
import MyHelmet from '../../images/fox-mainframe.jpg'

import './Cycling.css'

const Cycling = () => {

    return (
        <Container fluid>
            <div className="mtb-introduction">
                <Row>
                    <Col>
                        <h1>Mountain Biking</h1>
                        <img 
                            fluid 
                            src={Bike} 
                            alt="Mountain Biking" 
                            height="500">
                        </img>
                        <p>
                            Mountain biking is great way to explore woods and nature and same
                            time increase your stamina. It is fun way to get to know nature
                            with speedy descents and atmospheric trails.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="my-gear">
                <h3>My Gear</h3>
                <Row className="my-gear-row">
                    <Col>
                        <img fluid src={MyBike} alt="My own bike" height="500"></img>
                        <p>My bike that i use on trails.</p>
                    </Col>
                    <Col>
                        <img src={MyHelmet} alt="My own helmet" height="500"></img>
                        <p>My helmet that keeps my head safe.</p>
                    </Col>
                </Row>
            </div>
            <div>
                <Row className='mtb-video-row'>
                    <Col>
                        <iframe 
                            className="mtb-video"
                            title="Mountain biking for beginners"
                            src="https://www.youtube.com/embed/x_Gm4pW-AI8&ab">
                        </iframe>
                    </Col>
                    <Col>
                        <p>
                            This video introduces mountain biking for you
                            and gives you tips how to start this hobby.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Cycling; 