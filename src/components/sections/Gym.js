import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GymPic from "../../images/gym.jpg"
import Shoes from "../../images/Gym_Shoes.jpeg"
import Clothes from "../../images/gym-clothes.jpg"

import './Gym.css'

const Gym = () => {

    return (
        <Container fluid>
            <div className="gym-introduction">
                <Row>
                    <Col className="head-column">
                        <h1>Gym</h1>
                    </Col> 
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={4} md={4}>
                        <img fluid className="gym-picture" src={GymPic} alt="gym"></img>
                    </Col>
                    <Col xs={12} sm={4} md={4}>
                        <p className="gym-explanation">
                            This is my nr.1 hobby. It makes me forget all stressful things and makes my mind clear.
                            Going to gym is great hobby for everybody. You can train many ways to make your body
                            stronger and more durable. It helps much if you are doing sitting work. You get more 
                            flexible and your back pains gets a lot more sustainable. I recommend this to everyone.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="gym-shoes">
                <Row>
                    <Col>
                        <h3>Gym equipment</h3>
                    </Col>
                    <Col>
                        <img src={Shoes} alt="gym shoes" height="500"></img>
                        <p>
                            Gym shoes are essential item to use in gym. It helps you with
                            moves with barbell and gives you more confidence also! Plus side
                            is that your feet does not smell bad either.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="gym-clothes">
                <Row>
                    <Col>
                        <h3>Clothing</h3>
                    </Col>
                    <Col>
                        <img src={Clothes} alt="gym clothes" height="500"></img>
                        <p>
                             With durable and comfortable gym clothing you make your 
                             workouts feel more enjoyable and sweat does not feel bad
                             either. Headphones and water bottle are essential items too.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="gym-video">
                <Row>
                    <Col>
                        <iframe
                            className="gym-video" 
                            title="Workout for beginners"
                            src="https://www.youtube.com/embed/ixkQaZXVQjs&ab">
                        </iframe>
                        <p>Here is a nice beginner workout if you got interested.</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Gym; 