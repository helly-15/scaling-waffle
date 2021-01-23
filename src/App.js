
import './App.scss';
import './variablesSCSS/_variables.scss';
import logo from './assets/StudioLogo.png'
import Paw from "./navigation/Paw";
import React from "react";
import hidingCat from './assets/CatAvatar512.png'
import SectionTitle from "./sections/SectionTitle";
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

          <footer>
          </footer>
        </div>
          <main>
              <div className='hiding-cat' >
                  <img src = {hidingCat} alt = 'image of a cat head' className='hiding-cat__img' />
              </div>
              <section className='catository'>
                  <SectionTitle title ={'Catository'}/>
              </section>

          </main>
      </div>
  );
}

export default App;
