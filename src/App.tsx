import React from 'react';
import './App.css'
import { RandomJoke } from './components/RandomJoke'
function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <RandomJoke />
    </div>
  );
}

export default App