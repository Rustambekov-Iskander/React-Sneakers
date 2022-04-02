import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import BasketMenu from './components/basket-menu/BasketMenu';

function App() {

  const [ menuActive, setMenuActive ] = useState(false);

  const basketToggle = () => {
    setMenuActive(!menuActive)
  }

  return (
    <div className="App">
      <BasketMenu active={menuActive} setActive={setMenuActive}/>

      <div className='wrapper'>

        <header className='header'>
          <Header basketClick={basketToggle}/>
        </header>

        <div className='content'>
        <React.StrictMode>
          <AppRouter/>
        </React.StrictMode>
        </div>

        <footer className='footer'>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
