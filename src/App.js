import React, { useState, useEffect } from 'react'; 
import ReactModal from 'react-modal';
import Navbar from './components/Navbar'; 
import WordRendering from './components/WordRendering';

const App = () => {
  return ( 
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className='wordrendering'>
        <WordRendering />
      </div>
    </div>
  )
}

export default App;
