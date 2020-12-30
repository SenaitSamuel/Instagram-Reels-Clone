import React, { useRef, useState } from 'react';
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoHeader from '../VideoHeader/VideoHeader';
import './VideoCard.css';

function VideoCard({channel,avatarSrc,song,url,likes,shares}) {
    const [isVideoPlaying, setVideoPlaying] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
       if (isVideoPlaying){
           //stop
           videoRef.current.pause()
            setVideoPlaying( false)
       }else{
           //play
        videoRef.current.play()
            setVideoPlaying( true)
       }
    }

    return (
        <div className='videoCard'>
            <VideoHeader/>
            <video ref = {videoRef}
            onClick={onVideoPress}
            className='videoCard__player'  
            src={url} 
            alt= 'IG reel video'
             loop={true} />
            <VideoFooter
              channel = {channel}
              avatarSrc = {avatarSrc}
              song = {song}
              url= {url}
              likes={likes}
              shares={shares}
            />
        </div>
    )
}

export default VideoCard
