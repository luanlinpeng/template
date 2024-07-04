import { useEffect, useState } from 'react'

import './App.css'
import { useLocation } from 'wouter'
import { Routes } from './Router'
import "./styles/globals.css"

function App() {

  return (
    <div>
     <ScrollToTop />
     <Routes />
    </div>
  )
}

const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default App
