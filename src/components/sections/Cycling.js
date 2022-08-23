import React from "react";
import Bike from '../../images/Bike.jpg'
import MyBike from '../../images/marlin7.jpg'
import MyHelmet from '../../images/fox-mainframe.jpg'
import './Cycling.css'

const Cycling = () => {

    return (
        <div className="container">
            <div className="mtb-introduction">
                <h1>Mountain Biking</h1>
                <img src={Bike} alt="Mountain Biking" height="500"></img>
                <p>
                    Mountain biking is great way to explore woods and nature and same
                    time increase your stamina. It is fun way to get to know nature
                    with speedy descents and atmospheric trails.
                </p>
            </div>
            <div className="my-gear">
                <img src={MyBike} alt="My own bike" height="500"></img>
                <p>My bike that i use on trails.</p>
                <img src={MyHelmet} alt="My own helmet" height="500"></img>
                <p>My helmet that keeps my head safe.</p>
            </div>

            <iframe 
            className="mtb-video"
            title="Mountain biking for beginners"
            src="https://www.youtube.com/embed/x_Gm4pW-AI8&ab">
            </iframe>
        </div>
    )
}

export default Cycling; 