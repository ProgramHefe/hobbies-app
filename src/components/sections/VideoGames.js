import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Games from '../../images/video-games.jpg'
import CSGO from '../../images/csgo.jpg'
import Uncharted from '../../images/uncharted.jpg'

import './VideoGames.css'



const VideoGames = () => {

    return (
        <Container fluid>
            <div className="introduction">
                <Row>
                    <h1>Video Games</h1>
                </Row>
                <Row className='games-intro-row'>
                    <Col>
                        <img fluid src={Games} alt="Video Games"></img>
                    </Col>
                    <Col>
                        <p>
                            Video games are good way to kill time and hang out with your friends online.
                            Gaming could be relaxing and challenging social or both at the same time.
                            You can make new friends in onloine games or explore wonderful stories
                            which you could not imagine.
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="favourite-games">
                <Row>
                    <h3>Favourite Games</h3>
                </Row>
                <Row>
                    <Col>
                        <img fluid src={CSGO} alt="Counter Strike"></img>
                    </Col>
                    <Col>
                        <p>
                            Counter-Strike is a tactical shooter and it is based 
                            much on cummunications and temwork. It is best played
                            with friends and that is why i still play it regularly.
                         </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={Uncharted} alt="Uncharted game"></img>
                    </Col>
                    <Col>
                        <p>
                            Uncharted is action adventure game series that serves
                            you one of the best action scenes in gaming and memorable characters
                            and stories. Most memorable and fun story based game series for me.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default VideoGames; 