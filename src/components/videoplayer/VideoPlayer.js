import React from 'react';
// import ReactPlayer from "react-player";
import ReactPlayer from 'react-player/lazy';
import './MainPlayer.css';

const playIconButton = () => {
   return (
       <div id="playButton"
            className="hover:opacity-50 transition ease-in-out duration-500 hover:cursor-pointer absolute p-7 bg-gray-200 h-[90px] w-[90px] rounded-[100px]">
          <span className="font-light text-lg">Play</span>
       </div>
   );
};

const VideoPlayer = () => {
   const [exitButton, setExitButton] = React.useState(null);
   const [playerReady, setPlayerReady] = React.useState(false);
   const ref = React.useRef(null);

   React.useEffect(() => {
      const exitButton = document.getElementById('exit-button');

      setExitButton(exitButton);
      // }
   }, [playerReady, exitButton]);

   const handleShowPreview = () => {
      exitButton.classList.remove('show');
      exitButton.classList.add('hide');
      ref.current.showPreview();
   };

   const handleClickPreview = () => {
      console.log('Clicked Preview');
      console.log(exitButton);
      exitButton.classList.remove('hide');
      exitButton.classList.add('show');
   };

   return (
       <div className="w-full h-full px-24">
          <h2 className="text-4xl font-light text-center py-6">Weddings</h2>
          <p className="text-xl font-light text-center pb-6">We love to capture the love and joy of your special day. We
             are based in the beautiful city of Cape Town, South Africa. We are available to travel anywhere in the
             world.</p>
          <div id="player-container" className="w-full h-[90%] relative bg-black hover:cursor-pointer">
             <div id="exit-button"
                  className="hover:cursor-pointer show-hide-button p-7 bg-gray-200 h-[90px] w-[90px] rounded-[100px]"
                  onClick={handleShowPreview}
             >
                <span className="font-light text-lg">Exit</span>
             </div>
             <ReactPlayer
                 onClickPreview={handleClickPreview}
                 onReady={() => {
                    console.log('onReady');
                    setPlayerReady(true);
                 }}
                 ref={ref}
                 controls
                 playIcon={playIconButton()}
                 light={<img src="https://www.dropbox.com/s/zceo6ypj26v41fd/IMG_8779%20copy-min.jpg?dl=1"
                             className="w-full h-full object-cover" alt="Thumbnail"/>}
                 url="https://player.vimeo.com/video/807676404"
                 width="100%"
                 height="100%"
             />
          </div>

          <button className="mt-8 px-7 py-4 bg-teal-300" onClick={handleShowPreview}>Stop Playing</button>

          <p className="text-xl font-light text-center py-10">We love to capture the love and joy of your special day.
             We are based in the beautiful city of Cape Town, South Africa. We are available to travel anywhere in the
             world.</p>
       </div>
   );
};

export default VideoPlayer;
