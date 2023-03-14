import React from 'react';
import ReactPlayer from "react-player";

const VideoPlayer = () => {
   return (
       <div className="w-full h-full">
          <ReactPlayer
              controls
              light={<img src='https://www.dropbox.com/s/zceo6ypj26v41fd/IMG_8779%20copy-min.jpg?dl=1' className="w-full h-full object-cover" alt='Thumbnail' />}
              url="https://player.vimeo.com/video/807676404"
              width="100%"
              height="100%"
          />
       </div>
   );
};

export default VideoPlayer;
