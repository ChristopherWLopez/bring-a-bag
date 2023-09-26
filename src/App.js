import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [location, setLocation] =useState(null);

  useEffect(()=>{
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(
        (position)=>{

    }
  }
  })
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
