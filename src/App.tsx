import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';
import BasketMenu from './components/basket-menu/BasketMenu';

function App() {
  return (
    <div className="App">

      <div className='wrapper'>

        <header className='header'>
          <Header/>
          {/* <BasketMenu/> */}
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
