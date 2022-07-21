import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

function PlayerControls (props){
    const handlePlayingSong=(()=>{
        props.setIsPlaying(!props.isPlaying);
    })
    return(
        <div className="c-player-controls">
            <button className="skip-btn" onClick={()=> props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="play-btn" onClick={handlePlayingSong}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={()=> props.SkipSong(true)}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}
export default PlayerControls;