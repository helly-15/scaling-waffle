
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
              <svg viewBox="0 0 425 300">
                  <path id="curve" d="M-20,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
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
