import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import PostList from './components/post-list/PostList';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>

        <header className='header'>
          <Header/>
        </header>

        <div className='content'>
          <PostList/>
        </div>

        <footer className='footer'>
        </footer>

      </div>
    </div>
  );
}

export default App;
