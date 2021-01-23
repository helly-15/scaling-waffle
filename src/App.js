
import './App.scss';
import './variablesSCSS/_variables.scss';
import logo from './assets/StudioLogo.png'
import Paw from "./navigation/Paw";
import React from "react";
function App() {
    const MAIN_NAV_ITEMS=['Catository', 'Projects', 'Cat Master', 'Catstogram','testqqqqqqq'];
    const MAIN_NAV_CLASSNAMES =['first', 'second', 'third', 'fourth', 'fifth']
    const navigation =[];
    for (let i = 0;i < MAIN_NAV_ITEMS.length; i++) {
        navigation.push(<Paw className={ MAIN_NAV_CLASSNAMES[i] } text={ MAIN_NAV_ITEMS[i]} key = {`navButton${i}` }/>)
    }
  return (
      <div className='overlay'>
        <div className="app">
          <header className="header">
              <picture className='header__logo'>
                  <source srcSet={logo}/>
                  <img className='header__logo_img' src={logo} alt="company Logo"/>
              </picture>
              <ul className='navigation'>
                  {navigation}
              </ul>
          </header>
          <main>
              <svg viewBox="0 0 700 230">
                  <path id="curve" d="M0,203,64,181,96,192C128,203,160,245,192,245.3C224,245,256,203,288,181.3C320,160,352,160,384,154.7C416,149,448,139,480,149.3C512,160,544,192,576,202.7C608,213,640,203,672,181.3C704,160,736,128,768,112C800,96,832,96,864,112C896,128,928,160,960,160C992,160,1024,128,1056,138.7C1088,149,1120,203,1152,234.7C1184,267,1216,277,1248,250.7C1280,224,1312,160,1344,144C1376,128,1408,160,1424,176L1440,192L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,0" />
                  <text x="50">
                      <textPath href="#curve">
                          Catository
                      </textPath>
                  </text>
              </svg>
          </main>
          <footer>
          </footer>

        </div>
      </div>
  );
}

export default App;
