import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
