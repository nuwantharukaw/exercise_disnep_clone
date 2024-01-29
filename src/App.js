import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Detail from './components/Detail';

function App() {
  return(
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="detail" element={ <Detail/> } />
      </Routes>
    </div>
  )
}

export default App;

