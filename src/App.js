import React, {useRef , useEffect, useLayoutEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home/Home';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import gsap from 'gsap';

function App() {
  
  const load = gsap.timeline({
    paused: "true",
  });
  let loader = useRef(null)
  let progress = useRef(null)
  let percent = useRef(null)
  let bar = useRef(null)
  let barc = useRef(null)

  useEffect(() => {
    window.scrollTo(0,0)
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
      window.scrollTo(0,0)
    } 

    load.to([percent, bar], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress, {
      duration: 0.8,
      width: "0%",
    });
    load.to(loader, {
      visibility: 'hidden',
      zIndex: -1
    });
  });

  var id;
  var width1 = 1;

  function loading() {
    id = setInterval(frame, 20);
  }

  function frame() {
    if (width1 >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width1++;
      document.getElementById("barc").style.width = width1 + "%";
      document.getElementById("percent").innerHTML = width1 + "%";
    }
  }
   
  window.addEventListener("load", (e) => {
    window.scrollTo(0,0)
    loading();
  })

  return (
    <div>      
    <Router>
      <ScrollToTop />
        <div className="noise"></div>
        <div className="App">
          <div class="loader" ref={(el) => (loader = el)}>
              <div class="progress" ref={(el) => (progress = el)}>
                <div id="percent" ref={(el) => (percent = el)}>
                  1%
                </div>
                <div id="bar" ref={(el) => (bar = el)}>
                  <div id="barc" ref={(el) => (barc = el)}></div>
                </div>
              </div>
          </div>    
          <Switch>
            <Route path="/" exact><Home /></Route>
          </Switch>
          {/* <div className="cursor-follower" ref={ el => cursor = el }></div> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
