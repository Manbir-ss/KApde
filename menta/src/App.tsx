import React from 'react';
import './App.css';
import Main from './main';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
