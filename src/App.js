
import './App.scss';
import './variablesSCSS/_variables.scss';
import logo from './assets/StudioLogo.png'
import Paw from "./navigation/Paw";
import React from "react";
import hidingCat from './assets/CatAvatar512.png'
import SectionTitle from "./sections/SectionTitle";
import Catozitory from "./sections/catozitory/Catozitory";
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
              {/*<picture className='header__logo'>*/}
              {/*    <source srcSet={logo}/>*/}
              {/*    <img className='header__logo_img' src={logo} alt="company Logo"/>*/}
              {/*</picture>*/}
              <SectionTitle title ={'Basil cat webstudio'} className ={'header-title'} viewBox ={"0 0 3200 320"} x ={"50"}/>
              <ul className='navigation'>
                  {navigation}
              </ul>
          </header>

          <footer>
          </footer>
        </div>
          <main>
              <div className='hiding-cat' onAnimationEnd={(e)=>{e.target.style.bottom = '-60px'}}>
                  <img src = {hidingCat} alt = 'image of a cat head' className='hiding-cat__img' />
              </div>
              <Catozitory/>

          </main>
      </div>
  );
}

export default App;
