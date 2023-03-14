import React from 'react';
import ReactPlayer from "react-player";

const VideoPlayer = () => {
   return (
       <div >
          <ReactPlayer
              controls
              url="https://player.vimeo.com/video/807676404"
              width="100%"
              height="100%"
          />
       </div>
   );
};

export default VideoPlayer;
