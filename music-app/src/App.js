import React from "react";
import {useState} from 'react'
import Player from "./components/Player";

function App() {
  const [songs,setSongs] =useState([
    {
      title:'Love Mera Hit Hit',
      artist:'Neeraj Shridhar and Tulsi Kumar',
      img_src : "./assets/images/love mera hit hit.jpg",
      src : "./assets/songs/Love mera hit hit.mpeg"
    },
    {
      title:'Astagfirullah',
      artist:'MC Stan',
      img_src : "./assets/images/astag.jpg",
      src : "./assets/songs/astagfirullah.mpeg"
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex+1);

  return (
    <div className="App">
      <Player 
      song= {songs[currentSongIndex]}
      nextSong ={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
