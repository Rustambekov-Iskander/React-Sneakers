import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>

        <header className='header'>
          <Header/>
        </header>

        <div className='content'>
          <AppRouter/>
        </div>

        <footer className='footer'>
        </footer>

      </div>
    </div>
  );
}

export default App;
