import React from 'react';
import ReactPlayer from "react-player";

const VideoPlayer = () => {
   return (
       <div>
          <ReactPlayer controls url="https://player.vimeo.com/video/807676404" />
       </div>
   );
};

export default VideoPlayer;
