
import './App.scss';
import './variablesSCSS/_variables.scss';
import logo from './assets/StudioLogo.png'
import Paw from "./navigation/Paw";
import React from "react";
function App() {
  return (
      <div className='overlay'>
        <div className="app">
          <header className="header">
              <picture className='header__logo'>
                  <source srcSet={logo}/>
                  <img className='header__logo_img' src={logo} alt="company Logo"/>
              </picture>
              <ul className='navigation'>
                  <Paw className ={'first'} text ={'First Paw'}/>
                  <Paw className ={'second'}/>
                  <Paw className ={'third'}/>
                  <Paw className ={'fourth'}/>
                  <Paw className ={'fifth'}/>

              </ul>
          </header>
          <main>
              {/*<svg viewBox="0 0 425 300">*/}
              {/*    <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />*/}
              {/*    <text x="25">*/}
              {/*        <textPath href="#curve">*/}
              {/*            Dangerous Curves Ahead*/}
              {/*        </textPath>*/}
              {/*    </text>*/}
              {/*</svg>*/}
          </main>
          <footer>
          </footer>

        </div>
      </div>
  );
}

export default App;
