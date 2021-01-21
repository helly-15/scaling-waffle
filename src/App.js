
import './App.scss';
import './variablesSCSS/_variables.scss';
import logo from './assets/StudioLogo.png'
function App() {
  return (
      <div className='overlay'>
        <div className="app">
          <header className="header">
              <picture className='header__logo'>
                  <source srcSet={logo}/>
                  <img className='header__logo_img' src={logo} alt="company Logo"/>
              </picture>
          </header>
          <main>
              <section className='navigation'>
                  <div className='navigation-paw'>

                  </div>
              </section>
          </main>
          <footer>
          </footer>

        </div>
      </div>
  );
}

export default App;
