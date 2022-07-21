import React, {useState,useRef,useEffect} from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from './PlayerDetails';

//The useRef Hook allows you to persist values between renders. 
//It can be used to store a mutable value that does not cause a re-render when updated. 
//It can be used to access a DOM element directly.

//useState Hook allows us to track state in a function component.

//The useEffect Hook allows you to perform side effects in your components.
//Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//useEffect accepts two arguments. The second argument is optional.
//useEffect(<function>, <dependency>)


function Player(props){
    const audioEl = useRef(null);
    const [isPlaying,setIsPlaying]=useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    });
    //This skipsong function is used for skip buttons and when clicked it will fetch the next song index
    const SkipSong = (forwards = true) =>{
        if(forwards){
            props.setCurrentSongIndex(()=>{
                let temp = props.CurrentSongIndex;
                temp++;
                if(temp>props.songs.length -1){
                    temp=0;
                }
                return temp;
            })
        }else{
            props.setCurrentSongIndex(()=>{
                let temp = props.CurrentSongIndex;
                temp--;
                if(temp<0){
                    temp=props.songs.length-1;
                }
                return temp;
            });
        };
    }
    //src="public\assets\songs\astagfirullah.mpeg"
    return(
        <div className="c-player">
            {/* let song = src={props.songs[props.CurrentSongIndex].src} */}
            <audio src="{props.songs[props.CurrentSongIndex].src}" ref={audioEl}></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]}/>
            <PlayerControls 
                isPlaying = {isPlaying} 
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
            />
            {/* {props.nextSong.title} by {props.nextSong.artist} */}
            <p><strong>Next Up: </strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}
export default Player;