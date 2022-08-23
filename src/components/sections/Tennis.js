import React from "react";
import Tenniss from '../../images/tennis.jpg'
import Racquet from '../../images/Tennis_Racquet.jpg'
import Shoes from '../../images/tennis_shoes.jpg'
import './Tennis.css'


const Tennis = () => {

    return (
        <div className="container">
            <div className="tennis-introduction">
                <h1>Tennis</h1>
                <img src={Tenniss} alt="tennis"></img>
                <p>
                    Tennis is very nice way to get your competitive side pleasured.
                    It is nice way to get your hand-eye cordination better and stamina wise
                    too. You can play it 1v1 on 2v2.
                </p>
            </div>
            <div className="tennis-gear">
                <img src={Racquet} alt="Tennis racquet"></img>
                <p>
                    Tennis racquet is essential for this hobby. There is
                    many different type of racquets and i recommend to start
                    with beginner friendly version.
                </p>
                <img src={Shoes} alt="Tennis shoes"></img>
                <p>
                    Tennis shoes are not that important but they give you edge 
                    with better grip and suitability to court. Running shoes
                    are also valid for playing tennis.
                </p>
                <iframe 
                className="tennis-video"
                src="https://www.youtube.com/embed/YqgcykDGB2A&ab">
                
                </iframe>
                <p>Little video for you to get to know each type of shot.</p>
            </div>
        </div>
    )
}

export default Tennis; 