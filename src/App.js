import './App.css';
import Main from './components/main/Main';
import {useState} from "react"

import React, { useLayoutEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState([0]);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}
function App() {

  return (
    <div className="app">
     {useWindowWidth()>1024?<Main/>:<div className="message-for-main"><h1>Your screen width must be greater than 1024</h1></div>}
    </div>
  );
}

export default App;
