import React from 'react';
import ReactPlayer from "react-player";

const VideoPlayer = () => {
   return (
       <div className="w-full h-full px-16">
          <h2 className="text-4xl font-light text-center py-6">Weddings</h2>
          <p className="text-xl font-light text-center pb-6">We love to capture the love and joy of your special day. We are based in the beautiful city of Cape Town, South Africa. We are available to travel anywhere in the world.</p>
          <div className="w-full h-[90%]">
             <ReactPlayer
                 controls
                 light={<img src='https://www.dropbox.com/s/zceo6ypj26v41fd/IMG_8779%20copy-min.jpg?dl=1' className="w-full h-full object-cover" alt='Thumbnail' />}
                 url="https://player.vimeo.com/video/807676404"
                 width="100%"
                 height="100%"
             />
          </div>

          <p className="text-xl font-light text-center py-10">We love to capture the love and joy of your special day. We are based in the beautiful city of Cape Town, South Africa. We are available to travel anywhere in the world.</p>
       </div>
   );
};

export default VideoPlayer;
