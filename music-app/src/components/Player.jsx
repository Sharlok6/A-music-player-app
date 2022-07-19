import React from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from './PlayerDetails';

const Player = (props)=>{
    return(
        <div className="c-player">
            <audio src=""></audio>
            <h4> Playing Now</h4>
            <PlayerDetails song={props.song}/>
            <PlayerControls />
            <p><strong>Next Up: </strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    )
}
export default Player;