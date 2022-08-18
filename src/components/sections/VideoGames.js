import React from "react";
import Games from '../../images/video-games.jpg'
import CSGO from '../../images/csgo.jpg'
import Uncharted from '../../images/uncharted.jpg'


const VideoGames = () => {

    return (
        <div>
            <div>
                <h1>Video Games</h1>
                <img src={Games} alt="Video Games"></img>
                <p>
                    Video games are good way to kill time and hang out with your friends online.
                    Gaming could be relaxing and challenging social or both at the same time.
                    You can make new friends in onloine games or explore wonderful stories
                    which you could not imagine.
                </p>
            </div>
            <img src={CSGO} alt="Counter Strike"></img>
            <img src={Uncharted} alt="Uncharted game"></img>
        </div>
    )
}

export default VideoGames; 