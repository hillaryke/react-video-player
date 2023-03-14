import React from 'react';
import VideoPlayer from "./components/VideoPlayer";
import VideoJS from "./components/VIdeoJs";
import MainPlayer from "./components/MainPlayer";
//
// const options = {
//    autoplay: true,
//    controls: true,
//    sources: [{
//       src: 'http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6',
//       type: 'video/mp4'
//    }],
//    poster: 'https://www.dropbox.com/s/zceo6ypj26v41fd/IMG_8779%20copy-min.jpg?dl=1',
//    // fluid: true,
//    aspectRatio: '16:9',
// };


const App = () => {
   return (
       <MainPlayer />
   );
};

export default App;