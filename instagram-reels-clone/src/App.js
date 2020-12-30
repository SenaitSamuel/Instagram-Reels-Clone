import React, { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './Components/VideoCard/VideoCard';

import db from './firebaseConfig'

function App() {
  const [reels,setReels] =useState([])
  useEffect(()=> {
    // App component will run once when it loads and never again
     db.collection('reels').onSnapshot(snapshot=>(
       setReels(snapshot.docs.map(doc=>doc.data()))
     ))
  }, [])
  return (
    //BEM
    <div className="app">
      <div className='app__top'>
        <img className='app__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' alt='' />
        <h1>Reels</h1>
      </div>
      
      <div className='app__videos'>
        {reels.map((reel, index) => (
           <VideoCard key={index}
           channel = {reel.channel}
           avatarSrc = {reel.avatarSrc}
           song= {reel.song}
           url= {reel.url}
           likes= {reel.likes}
           shares= {reel.shares}
           />
        ))}
         
      </div>
     
    </div>
  );
}

export default App;
