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
    const { ref: aliceRef, getAnimation: aliceAnimation } = useWebAnimations({

        id: "cloudes-div",
        keyframes: [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }
        ],
        timing: {
        
        duration: 36000,
        iterations: Infinity,
        playbackRate: -2
        
        },
        onReady: () => setInterval( () => {
            speedDown();
            // calcScore();
        }, 500 ),
        onUpdate: () => calcScore(),
    });

    const { ref: foreground1Ref, getAnimation: fore1Animation } = useWebAnimations({
        id: 'fish-div',
        keyframes: [
            { transform: 'translateX(100%)' },
            { transform: 'translateX(-100%)' }
          ],
          timing: {
    
            duration: 30000,
            iterations: Infinity,
            playbackRate: -2
            
          },
        onReady: ({ animation }) => animation.currentTime = animation.effect.getTiming().duration / 2,
    });

  

   const speedUp = () => {
    aliceAnimation().updatePlaybackRate(aliceAnimation().playbackRate* 1.2);
    fore1Animation().updatePlaybackRate(fore1Animation().playbackRate* 1.2);
   
}

    const speedDown = () => {
      // Speed down alice.
      if ( aliceAnimation().playbackRate > 0.4)
      aliceAnimation().updatePlaybackRate(aliceAnimation().playbackRate* .7);
      fore1Animation().updatePlaybackRate(fore1Animation().playbackRate* .9); 
    }
    
    const calcScore = () => setScore( score + fore1Animation().playbackRate / 100 );
  



  return (
    <div className="wrapper" onClick={speedUp} onTouchEnd={speedUp}>

        <div className="son">
        <img src={mysun} alt="mysun" />
        </div>

        <div className="background" id="cloudes-div">
            <img src={cloud5} id="cloud1" alt="cloud5" />
            <img src={cloud} id="cloud2" alt="cloud" />
        </div>

        <div className="background" id="boats-div">
            <img src={boat} id="bird2" alt="boat" />
        </div>

        <div className="background" id="fish-div">
            <img src={fish2} id="fish2" alt="fish2" />
        </div>

        <div className="background" id="background2">
            <img src={sea} id="sea" alt="sea" />
        </div>


    </div>
  );
}

export default App;
