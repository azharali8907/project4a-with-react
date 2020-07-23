import React, { useRef, useState } from 'react';

import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import cloud5 from './img/cloud5.png';
import mysun from './img/mysun.png';
import cloud from './img/cloud.png';
import fish2 from './img/fish2.gif';
import sea from './img/sea.gif';
import boat from './img/boat.gif';



function App() {
  const [ score, setScore ] = useState(0);

  const refUse =  useRef(null)

  const cloudAnum = useWebAnimations({refUse,
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
    
      duration: 36000,
    iterations: Infinity,
    playbackRate: -2
      
    },
  });

  const fishAnum = useWebAnimations({
    keyframes: [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ],
    timing: {
    
      duration: 30000,
      iterations: Infinity,
      playbackRate: -2
      
    },
    onReady: () => setInterval( () => {
      speedDown();
      // calcScore();
  }, 3000 ),
  onUpdate: () => calcScore(),
  });

  

  function speedUp(){
    cloudAnum.getAnimation().updatePlaybackRate(cloudAnum.getAnimation().playbackRate* 1.2);
    fishAnum.getAnimation().updatePlaybackRate(fishAnum.getAnimation().playbackRate* 1.2);
   }

  
 

    const speedDown = () => {
      // Speed down alice.
      if ( cloudAnum.getAnimation().playbackRate > 0.4)
      cloudAnum.getAnimation().updatePlaybackRate(cloudAnum.getAnimation().playbackRate* .7);
      fishAnum.getAnimation().updatePlaybackRate(fishAnum.getAnimation().playbackRate* .7); 
    }
    
  
    const calcScore = () => setScore( score + cloudAnum.getAnimation().playbackRate / 100 );


  return (
    <div className="wrapper" onClick={speedUp}>

        <div className="son">
        <img src={mysun} alt="mysun" />
        </div>

        <div className="background" id="cloudes-div" ref={cloudAnum.ref}>
            <img src={cloud5} id="cloud1" alt="cloud5" />
            <img src={cloud} id="cloud2" alt="cloud" />
        </div>

        <div className="background" id="boats-div">
            <img src={boat} id="bird2" alt="boat" />
        </div>

        <div className="background" id="fish-div" ref={fishAnum.ref}>
            <img src={fish2} id="fish2" alt="fish2" />
        </div>

        <div className="background" id="background2">
            <img src={sea} id="sea" alt="sea" />
        </div>


    </div>
  );
}

export default App;
