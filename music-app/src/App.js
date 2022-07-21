import React from "react";
import {useState,useEffect} from 'react'
import Player from "./components/Player";

function App() {
  const songs =[
    {
      title:'Love Mera Hit Hit',
      artist:'Neeraj Shridhar and Tulsi Kumar',
      img_src : "./assets/images/love mera hit hit.jpg",
      src : "./public/assets/songs/Kya kru.mp3"
    },
    {
      title:'Astagfirullah',
      artist:'MC Stan',
      img_src : "./assets/images/astag.jpg",
      src : "./assets/songs/astagfirullah.mpeg"
    },
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1);

  //Whenever this setCurrentSongIndex will takes place this useEffect will work  
  useEffect(() =>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1 > songs.length-1){
        return 0;
      }
      else{
        return currentSongIndex + 1;
      }
    });
  },[currentSongIndex]);

  return (
    <div className="App">
      <Player 
      //song= {songs[currentSongIndex]}
      //nextSong ={songs[nextSongIndex]}
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex ={setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
