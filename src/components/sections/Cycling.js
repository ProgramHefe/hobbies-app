import React from "react";
import Bike from '../../images/Bike.jpg'
import MyBike from '../../images/marlin7.jpg'
import MyHelmet from '../../images/fox-mainframe.jpg'

const Cycling = () => {

    return (
        <div>
            <div>
                <h1>Mountain Biking</h1>
                <img src={Bike} alt="Mountain Biking" height="500"></img>
                <p>
                    Mountain biking is great way to explore woods and nature and same
                    time increase your stamina. It is fun way to get to know nature
                    with speedy descents and atmospheric trails.
                </p>
            </div>
            <div>
                <img src={MyBike} alt="My own bike" height="500"></img>
                <img src={MyHelmet} alt="My own helmet" height="500"></img>
            </div>

            <iframe 
            title="Mountain biking for beginners"
            src="https://www.youtube.com/embed/x_Gm4pW-AI8&ab">
            </iframe>
        </div>
    )
}

export default Cycling; 