import React from "react";
import GymPic from "../../images/gym.jpg"
import Shoes from "../../images/Gym_Shoes.jpeg"
import Clothes from "../../images/gym-clothes.jpg"

const Gym = () => {

    return (
        <div className="container">
            <h1>Gym</h1>
            <img src={GymPic} alt="gym" height="600"></img>
            <p>This is my nr.1 hobby. It makes me forget all stressful things and makes my mind clear.
                Going to gym is great hobby for everybody. You can train many ways to make your body
                stronger and more durable. It helps much if you are doing sitting work. You get more 
                flexible and your back pains gets a lot more sustainable. I reccommend this to everyone.
            </p>
        <div>
            <img src={Shoes} alt="gym shoes" height="500"></img>
            <p></p>
            <img src={Clothes} alt="gym clothes" height="500"></img>
            <p></p>
        </div>
        <div>
            <iframe 
                title="Workout for beginners"
                    src="https://www.youtube.com/embed/ixkQaZXVQjs&ab">
            </iframe>
            <p>Here is a nice beginner workout if you got interested.</p>
        </div>
        </div>
    )
}

export default Gym; 