import React from "react";
import Tenniss from '../../images/tennis.jpg'
import Racquet from '../../images/Tennis_Racquet.jpg'
import Shoes from '../../images/tennis_shoes.jpg'


const Tennis = () => {

    return (
        <div>
            <div>
                <h1>Tennis</h1>
                <img src={Tenniss} alt="tennis"></img>
                <p>
                    Tennis is very nice way to get your competitive side pleasured.
                    It is nice way to get your hand-eye cordination better and stamina wise
                    too. You can play it 1v1 on 2v2.
                </p>
            </div>
            <div>
                <img src={Racquet} alt="Tennis racquet"></img>
                <img src={Shoes} alt="Tennis shoes"></img>
                <iframe src="https://www.youtube.com/embed/YqgcykDGB2A&ab"></iframe>
            </div>
        </div>
    )
}

export default Tennis; 